// services/uploadService.js
import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const bucketName = process.env.AWS_S3_BUCKET_NAME;

/**
 * Upload file to S3
 * @param {Object} file - Multer file object
 * @returns {Promise<String>} - S3 file URL
 */
export const uploadToS3 = async file => {
  try {
    const uniqueFileName = generateUniqueFileName(file.originalname);

    const params = {
      Bucket: bucketName,
      Key: `pins/${uniqueFileName}`,
      Body: file.buffer,
      ContentType: file.mimetype,
      Metadata: {
        "original-name": file.originalname,
        "upload-timestamp": new Date().toISOString()
      }
    };

    const result = await s3.upload(params).promise();
    return result.Location;
  } catch (error) {
    console.error("S3 upload error:", error);
    const uploadError = new Error(
      `Failed to upload image to S3: ${error.message}`
    );
    uploadError.name = "S3UploadError";
    throw uploadError;
  }
};

/**
 * Generate unique filename
 * @param {String} originalName
 * @returns {String}
 */
const start = 2;
const end = 8;
const strBase = 36;
function generateUniqueFileName(originalName) {
  const timestamp = Date.now();
  const randomString = Math.random().toString(strBase).substring(start, end);
  const extension = originalName.split(".").pop();
  return `${timestamp}-${randomString}.${extension}`;
}
