import { NextResponse } from "next/server";
import AWS from "aws-sdk";

// Configure AWS SDK with credentials and region from environment variables
AWS.config.update({
  accessKeyId: process.env.C_AWS_ACCESS_KEY,
  secretAccessKey: process.env.C_AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

// Define the SQS client
const sqs = new AWS.SQS();

export async function POST(request: Request) {
  try {
    const {
      userId,
      meetingId,
      type = "report",
      bucket = "syneurgy-prod",
    } = await request.json();

    const key = userId + "-" + meetingId;
    console.log(userId, meetingId, type, bucket);

    if (!userId || !meetingId || !key) {
      return NextResponse.json(
        { error: "Missing userId, meetingId, or key" },
        { status: 400 }
      );
    }

    const messageBody = {
      bucket,
      key,
      meetingId,
      userId,
      type,
    };

    const params = {
      QueueUrl: process.env.MEETINGS_QUEUE_URL as string, // Queue URL from environment variable
      MessageBody: JSON.stringify(messageBody),
      MessageGroupId: "report",
      MessageDeduplicationId: key + Date.now().toString(),
    };

    // Send message to SQS
    const result = await sqs.sendMessage(params).promise();

    return NextResponse.json(
      { message: "Report generation initiated", MessageId: result.MessageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send message to SQS:", error);
    return NextResponse.json(
      { error: "Failed to initiate report generation" },
      { status: 500 }
    );
  }
}
