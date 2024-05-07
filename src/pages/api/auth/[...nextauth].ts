import { jwtDecode } from "jwt-decode";
import aws from "aws-sdk";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import awsConfig from "@/config/aws.config";

aws.config.update({
  region: awsConfig.region,
  apiVersion: "latest",
  credentials: {
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
  },
});

let cognito = new aws.CognitoIdentityServiceProvider();

async function refreshAccessToken(token: any) {
  try {
    console.log({ RT: token.refreshToken, label: "RT" });

    const authParams = {
      AuthFlow: "REFRESH_TOKEN_AUTH",
      ClientId: awsConfig.cognito.ClientId,
      UserPoolId: awsConfig.cognito.UserPoolId,
      AuthParameters: {
        REFRESH_TOKEN: token.refreshToken,
      },
    };

    const authResponse = await cognito.adminInitiateAuth(authParams).promise();

    if (authResponse.AuthenticationResult) {
      const { AccessToken, IdToken, RefreshToken, ExpiresIn } =
        authResponse.AuthenticationResult;

      return {
        ...token,
        accessToken: AccessToken,
        idToken: IdToken,
        refreshToken: RefreshToken,
        exp: ExpiresIn,
      };
    } else {
      console.log("Failed to refresh access token");
      return null;
    }
  } catch (error) {
    console.log("Error refreshing access token:", error);
    return null;
  }
}

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        console.log({ credentials });
        try {
          let tokens = await cognito
            .adminInitiateAuth({
              AuthFlow: "ADMIN_USER_PASSWORD_AUTH",
              ClientId: awsConfig.cognito.ClientId,
              UserPoolId: awsConfig.cognito.UserPoolId,
              AuthParameters: {
                USERNAME: credentials?.username,
                PASSWORD: credentials?.password,
              },
            } as any)
            .promise();

          let user = await cognito
            .adminGetUser({
              UserPoolId: awsConfig.cognito.UserPoolId,
              Username: credentials?.username,
            } as any)

            .promise();
          // console.log(user.UserAttributes);

          if (!user) return null;

          const sub = user.UserAttributes?.[0].Value;
          const name = user.UserAttributes?.[2].Value;
          const email = user.UserAttributes?.[3].Value;

          // console.log("signin res", tokens);
          if (tokens) {
            // Any object returned will be saved in `user` property of the JWT
            return { ...tokens, sub, name, email } as any;
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null;
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        } catch (e) {
          console.log(e);

          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/error",
    // verifyRequest: "/auth/verify-email",
  },

  callbacks: {
    async jwt({ token, user }: any) {
      // console.log({ tokenBEFORECHANGE: token });
      try {
        // console.log({ token, user });
        if (user) {
          // console.log({ user });

          return {
            ...token,
            name: user.name,
            sub: user.sub,
            email: user.email,
            accessToken: user.AuthenticationResult.AccessToken,
            refreshToken: user.AuthenticationResult.RefreshToken,
            exp: user.AuthenticationResult.ExpiresIn,
          };
        }

        const jwtInfo: any = jwtDecode(token.accessToken);

        // console.log("expiry", new Date(jwtInfo.exp * 1000));
        // console.log({
        //   date: Date.now(),
        //   // jwtInfo,
        //   valid: Date.now() < jwtInfo.exp * 1000,
        // });
        if (jwtInfo && Date.now() < jwtInfo.exp * 1000) {
          console.log("validd");
          return token;
        }

        console.log({ invalid: true });
        return refreshAccessToken(token);
      } catch (e) {
        console.log("jwt err", e);
      }
    },

    async session({ session, token }: any) {
      try {
        const { accessToken, refreshToken, name, sub, email } = token;
        // retrieve username and sub
        const jwtInfo = jwtDecode(accessToken);
        console.log({ session: true, jwtInfo, accessToken, refreshToken });
        console.log(jwtInfo);
        // retrieve user data
        console.log({ jwt: jwtInfo.sub });
        const res = await fetch(process.env.AWS_APPSYNC_ENDPOINT || "", {
          method: "POST",
          // @ts-ignore
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_APPSYNC_API_KEY,
          },
          body: JSON.stringify({
            query: `
              query getUser($sub: ID!){
                user: getUser(sub: $sub) {
                  avatar
                  sub
                  onboarded
                  firstName
                  lastName
                  status
                  createdAt
                  email
                }
              }`,
            variables: {
              sub: jwtInfo.sub,
            },
          }),
        });

        const response = await res.json();
        const { data, errors } = response;
        console.log({ data, errors });

        // console.log({ response: response.errors, data, jwtInfo });
        // set session
        session.user.accessToken = accessToken;
        session.user.refreshToken = refreshToken;
        session.user.sub = data.user.sub;
        session.user.email = data.user.email;
        session.user.firstName = data.firstName;
        session.user.lastName = data.lastName;
        session.user.username = data.username;
        session.user.onboarding = data.user.onboarding;

        // session.user.onboarding_about = data.onboarding.about;
        // session.user.onboarding_createTeam = data.onboarding.createTeam;
        // session.user.onboarding_aboutTeam = data.onboarding.createTeam;
        // session.user.onboarding_inviteTeam = data.onboarding.inviteTeam;
        session.user.onboarded =
          data?.user?.onboarded === false
            ? false
            : data?.user?.onboarded === true
              ? true
              : "failed";
        session.user.group = (jwtInfo as any)?.["cognito:groups"]?.[0];
        session.user.avatar = data?.user?.avatar || "";
        // // session.user.username = jwtInfo?.username;
        // session.user.avatar = data?.user?.avatar;
        // session.user.stripeCustomerId = data?.user?.stripeCustomerId;
        // console.log('jwtInfo', jwtInfo);
        console.log({ session });
        return session;
      } catch (error) {
        console.log("Error occured when configuring the session");
        console.log(error);
      }
    },
  },
};

export default NextAuth(authOptions as any);
