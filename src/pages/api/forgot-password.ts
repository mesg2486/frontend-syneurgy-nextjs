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
  res: NextApiResponse<IResponse>
) {
  const response: any = { data: "", error: null, status: null };

  if (req.method === "POST") {
    const { email } = req.body;

    const cognitoClient = new CognitoIdentityServiceProvider({
      region: awsConfig.region,
    });

    const params = {
      ClientId: awsConfig.cognito.ClientId,
      Username: email,
    };

    try {
      await cognitoClient.forgotPassword(params).promise();

      response.status = 200;
      response.data = { message: "Reset code sent" };
    } catch (error: any) {
      console.log({ error });
      response.status = 500;
      response.error = { message: error?.message };
    }
  } else {
    response.status = 405; // Method Not Allowed
    response.error = { message: "Invalid Request" };
  }

  return res.status(response.status).json(response);
}
