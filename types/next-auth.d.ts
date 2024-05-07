import "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      avatar: string;
      username: string;
      sub: string;
      onboarded: boolean;
      firstName: string;
      lastName: string;
      status: string;
      createdAt: string;
      group: string;
      email: string;
      accessToken: string;
      refreshToken: string;
      stripeCustomerId: string;
      credentials: {
        AccessKeyId: string;
        Expiration: number;
        SecretKey: string;
        SessionToken: string;
      };
    };
  }
}
