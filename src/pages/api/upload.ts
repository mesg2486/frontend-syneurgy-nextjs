import type { NextApiRequest, NextApiResponse } from "next";
import { config, S3 } from "aws-sdk";
import awsConfig from "@/config/aws.config";

config.update({
  region: awsConfig.region,
  apiVersion: "latest",
  credentials: {
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
  },
});

const s3 = new S3({
  signatureVersion: awsConfig.s3.signatureVersion,
  region: awsConfig.s3.region,
});

export default async function getPresignedUrl(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response: any = { data: null, error: null, status: null };
  try {
    const { filename, type, sub, articleId } = req.body;
    console.log(type);
    let url = `prod/temp/${filename}`;

    if (type === "profile") {
      url = `prod/profile/${sub}/${filename}`;
    }

    if (type === "meeting") {
      url = `prod/meeting/${sub}/${filename}`;
    }

    const s3Params = {
      Bucket: awsConfig.s3.bucket,
      Key: url,
      Expires: 3000,
      ContentType: "multipart/form-data",
    };

    console.log({ s3Params });

    const uploadURL = await s3.getSignedUrlPromise("putObject", s3Params);

    response.status = 200;
    response.data = { url: uploadURL };
  } catch (error: any) {
    console.error("Error generating presigned URL:", error);
    response.status = 500;
    response.error = { message: error?.message || "server error" };
  }

  res.status(response.status).json(response);
}
