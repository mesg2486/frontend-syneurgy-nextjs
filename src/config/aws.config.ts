const awsConfig = {
  region: process.env.AWS_REGION || "",
  accessKeyId: process.env.C_AWS_ACCESS_KEY || "",
  secretAccessKey: process.env.C_AWS_SECRET_KEY || "",
  cognito: {
    region: process.env.AWS_REGION || "",
    UserPoolId: process.env.AWS_COGNITO_USERPOOL_ID || "",
    ClientId: process.env.AWS_COGNITO_CLIENT_ID || "",
  },
  dynamoDb: {
    endpoint: process.env.AWS_DYNAMODB_ENDPOINT || "",
    region: process.env.AWS_REGION || "",
  },
  s3: {
    endpoint: process.env.AWS_S3_BUCKET_ENDPOINT || "",
    region: process.env.AWS_S3_BUCKET_REGION || "",
    bucket: process.env.AWS_S3_BUCKET_NAME || "",
    signatureVersion: process.env.AWS_S3_SIGNATURE_VERSION || "",
  },
};

export default awsConfig;
