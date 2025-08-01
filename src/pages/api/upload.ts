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
    const { filename, type, sub, articleId, contentType, meetingId } = req.body;
    console.log({ body: req.body });
    let url = `temp/${filename}`;

    if (type === "profile") {
      url = `profiles/${sub}/${filename}`;
    }

    if (type === "thumbnails") {
      url = `thumbnails/${meetingId}/${filename}`;
    }

    if (type === "meeting") {
      url = `meetings/${meetingId}/${filename}`;
    }

    const s3Params = {
      Bucket: awsConfig.s3.bucket,
      Key: url,
      Expires: 3000,
      ContentType: contentType || "multipart/form-data",
    };

    console.log({ s3Params });

    const signedURL = await s3.getSignedUrlPromise("putObject", s3Params);
    const unsignedURL = signedURL?.split("?")[0];

    const cloudFrontURL = unsignedURL?.replace(
      `${process.env.AWS_S3_DOWNLOAD_ENDPOINT}`,
      `${process.env.AWS_CLOUDFRONT_DOWNLOAD_ENDPOINT}`,
    );

    response.status = 200;
    response.data = { url: signedURL, downloadUrl: cloudFrontURL };
  } catch (error: any) {
    console.error("Error generating presigned URL:", error);
    response.status = 500;
    response.error = { message: error?.message || "server error" };
  }

  res.status(response.status).json(response);
}
