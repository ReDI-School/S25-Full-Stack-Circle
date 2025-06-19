// services/tagGenerationService.js
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = "https://api-inference.huggingface.co/models";
const MODEL = "google/vit-base-patch16-224";
const API_KEY = process.env.HUGGING_FACE_API_KEY || null;

/**
 * Clean a label from Hugging Face API
 */
const cleanLabel = label =>
  label
    .split(",")[0]
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove special characters
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim();

/**
 * Hugging Face model call
 */
const generateTagsWithHuggingFace = async imageUrl => {
  try {
    console.log("Generating tags with Hugging Face...");

    // Download image from URL should change this later
    const imageResponse = await axios.get(imageUrl, {
      responseType: "arraybuffer"
    });

    const imageBuffer = Buffer.from(imageResponse.data, "binary");

    const headers = {
      "Content-Type": "application/octet-stream"
    };

    if (API_KEY) {
      headers["Authorization"] = `Bearer ${API_KEY}`;
    }

    // Send image buffer as binary
    const response = await axios.post(`${BASE_URL}/${MODEL}`, imageBuffer, {
      headers,
      timeout: 15000
    });
    console.log("response . data ", response.data);
    if (Array.isArray(response.data)) {
      const tags = response.data.map(item => cleanLabel(item.label));
      console.log("Tags generated:", tags);
      return tags;
    }

    return [];
  } catch (err) {
    console.error("Hugging Face API error:", err);
    throw err;
  }
};

/**
 * Main entry function
 */
export const generateData = async imageUrl => {
  try {
    const tags = await generateTagsWithHuggingFace(imageUrl);
    if (tags && tags.length > 0) return tags;
  } catch (err) {
    console.error("generateTags error:", err);
  }
};
