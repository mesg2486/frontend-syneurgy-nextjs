import awsConfig from "@/config/aws.config";
import { config, CognitoIdentityServiceProvider } from "aws-sdk";
import { NextApiRequest, NextApiResponse } from "next";

config.update({
  region: awsConfig.region,
  apiVersion: "latest",
  credentials: {
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
  },
});

interface IResponse {
  status: number;
  data: { message: string; payload?: any };
  error: { message: string; payload?: any };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>,
) {
  const response: any = { data: "", error: null, status: null };

  if (req.method === "POST") {
    const {
      name = "User",
      username,
      email,
      password,
      teamId,
      group = "user", // passing group from payload can be a disaster
    } = req.body;

    const cognitoClient = new CognitoIdentityServiceProvider({
      region: awsConfig.region,
    });

    const params = {
      ClientId: awsConfig.cognito.ClientId,
      Username: username,
      Password: password,
      UserAttributes: [
        { Name: "name", Value: name },
        { Name: "email", Value: email },
        { Name: "custom:teamId", Value: teamId || "any" },
      ],
    };

    console.log({ params });

    const groupParams = {
      UserPoolId: awsConfig.cognito.UserPoolId,
      Username: username,
      GroupName: "user",
    };

    try {
      await cognitoClient.signUp(params).promise();
      await cognitoClient.adminAddUserToGroup(groupParams).promise();
      console.log({ body: req.body });

      response.status = 200;
      response.data = { message: "User signed up successfully" };
    } catch (error: any) {
      console.log({ error, type: error.__type });
      response.status = 500;
      response.error = { message: error?.message };
    }
  } else {
    response.status = 405; // Method Not Allowed
    response.error = { message: "Invalid Request" };
  }

  return res.status(response.status).json(response);
}
