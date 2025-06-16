import prisma from "../prisma/client.js";
import axios from "axios";
import {
  BAD_REQUEST,
  CREATED,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  OK,
  UNAUTHORIZED
} from "../constants/http.js";

import { uploadToS3 } from "../services/uploadService.js";
// import * as tagGenerationService from "../services/tagGenerationService.js";

/**
 * POST /api/pin/upload-and-tag
 */
export const uploadAndTag = async (req, res) => {
  try {
    // S3 part
    if (!req.file || !req.file.mimetype.startsWith("image/")) {
      return res.status(BAD_REQUEST).json({
        success: false,
        error: "No image file provided"
      });
    }

    console.info("Processing image upload:", req.file.originalname);

    const imageUrl = await uploadToS3(req.file);
    console.info("Image uploaded to S3:", imageUrl);

    // AI tags generation Part
    // TODO : replace the empty array [] with a call to generateTags from tagGenService which should take image url and return an array of tags
    // TODO : Create tagGenService in the services folder
    const aiTags = [];
    console.info("AI generated tags:", aiTags);

    res.json({
      success: true,
      imageUrl,
      tags: aiTags,
      message: "Image uploaded and tags generated successfully"
    });
  } catch (error) {
    console.error("Upload and tag error:", error);

    res.status(INTERNAL_SERVER_ERROR).json({
      success: false,
      error: "Failed to upload image and generate tags",
      details:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error"
    });
  }
};
export const uploadFromUrl = async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl || typeof imageUrl !== "string") {
      return res.status(BAD_REQUEST).json({ error: "Image URL is required" });
    }

    const headResp = await axios.head(imageUrl);
    const contentType = headResp.headers["content-type"];
    if (!contentType.startsWith("image/")) {
      return res
        .status(BAD_REQUEST)
        .json({ error: "URL does not point to an image" });
    }

    // AI tags generation Part
    // TODO : replace the empty array [] with a call to generateTags from tagGenService which should take image url and return an array of tags
    // TODO : Create tagGenService in the services folder
    const aiTags = [];

    res.json({
      success: true,
      imageUrl,
      tags: aiTags,
      message: "Tags generated from image URL"
    });
  } catch (error) {
    console.error("uploadFromUrl error:", error.message);
    res.status(INTERNAL_SERVER_ERROR).json({
      error: "Failed to tag image from URL"
    });
  }
};

// Creating new pin
export const createPin = async (req, res) => {
  try {
    const {
      title,
      description,
      link,
      altText,
      // relatedProductIds = [], // Array of related pin IDs
      // tagName = [], // Array of existing tag IDs
      // newTags = [],

      isAllowedtoComment,
      showSimilarProduct,
      imageUrl
    } = req.body;

    const userId = req.user?.id;
    if (!userId) {
      return res
        .status(UNAUTHORIZED)
        .json({ message: "User not authenticated" });
    }

    // uploading the Image

    let image;
    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    } else if (imageUrl) {
      image = imageUrl;
    } else {
      return res
        .status(BAD_REQUEST)
        .json({ message: "Image is required (upload or URL)" });
    }
    /* Check for existing board or create the board */
    {
      /* let userBoard = await prisma.board.findFirst({
      where: {
        userId: userId
      }
    });

    if (!userBoard) {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      const boardName = user?.name ? `${user.name}'s board` : "My Board";
      userBoard = await prisma.board.create({
        data: {
          name: boardName,
          userId: userId
        }
      });
    }*/
    }

    const pin = await prisma.pin.create({
      data: {
        title,
        imageUrl: image,
        description,
        link,
        altText,
        isAllowedtoComment: isAllowedtoComment ?? true,
        showSimilarProduct: showSimilarProduct ?? false,
        author: { connect: { id: userId } }
        // board: { connect: { id: userBoard.id } }

        // to add the Tags
        /*tags: {
          connectOrCreate: (tagNames || []).map(tagNames => ({
            where: { name: tagNames },
            create: { name: tagNames }
          }))
        */
      },
      include: {
        author: true,
        tags: true
        // board: true
      }
    });
    res.status(CREATED).json(pin);
  } catch (error) {
    console.error("Error in creating new Pin", error.message);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};
export const updatePin = async (req, res) => {
  try {
    const pinId = parseInt(req.params.id);
    const userId = req.user.id;
    const {
      title,
      description,
      link,
      altText,
      isAllowedtoComment,
      showSimilarProduct,
      imageUrl
      // tagName = [],
      // newTags = []
    } = req.body;
    const currentPin = await prisma.pin.findUnique({ where: { id: pinId } });
    if (currentPin.authorId !== userId) {
      return res
        .status(UNAUTHORIZED)
        .json({ message: "Not authorized to update this pin" });
    }
    const updatedPin = await prisma.pin.update({
      where: { id: pinId },
      data: {
        title,
        description,
        link,
        altText,
        imageUrl,
        isAllowedtoComment,
        showSimilarProduct
        /* } tags: {
          set: [],
          connect: tagName.map(name => {
            return { name };
          }),
          create: newTags.map(name => {
            return { name };
          })
        }*/
      },
      include: { tags: true, author: true } // removed board
    });

    res.json(updatedPin);
  } catch (error) {
    console.error("Error in updating the pin", error);
    res.status(INTERNAL_SERVER_ERROR).json({ message: "Can't update the pin" });
  }
};
export const deletePin = async (req, res) => {
  try {
    const pinId = parseInt(req.params.id);
    const userId = req.user.id;

    const currentPin = await prisma.pin.findUnique({ where: { id: pinId } });
    if (!currentPin) {
      return res.status(NOT_FOUND).json({ message: "Pin not found" });
    }
    if (currentPin.authorId !== userId) {
      return res
        .status(UNAUTHORIZED)
        .json({ message: "Not authorized to delete this pin" });
    }

    await prisma.pin.delete({ where: { id: pinId } });

    res.json({ message: "Pin deleted successfully" });
  } catch (error) {
    console.error("Error deleting pin:", error);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

export const getAllPins = async (req, res) => {
  try {
    const pins = await prisma.pin.findMany({
      include: {
        author: true,
        // board: true,
        tags: true
      }
    });

    // first pin url for debugging
    if (pins.length) {
      console.log("Sample image URL:", pins[0].imageUrl);
    }

    res.status(OK).json({ pins });
  } catch (error) {
    console.error("Error fetching pin:", error);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

// Get Pin by Id
export const getPinById = async (req, res) => {
  try {
    const pinId = parseInt(req.params.id);
    const pin = await prisma.pin.findUnique({
      where: { id: pinId },
      include: {
        author: true,
        // board: true,
        tags: true
      }
    });

    if (!pin) {
      return res.status(NOT_FOUND).json({ message: "Pin not found" });
    }

    res.status(OK).json(pin);
  } catch (error) {
    console.error("Error fetching pin by ID:", error);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};
// Get the Pins created by each user
export const getCreatedPins = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const CreatedPins = await prisma.pin.findMany({
      where: { authorId: userId }
    });
    console.log("userI and name", userId);
    console.log("pins found", CreatedPins.length);

    res.status(OK).json(CreatedPins);
  } catch (error) {
    next(error);
  }
};
