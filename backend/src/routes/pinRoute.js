import express from "express";
import multer from "multer";
import { PrismaClient } from "@prisma/client";
import {
  createPin,
  updatePin,
  deletePin,
  getAllPins,
  getPinById,
  uploadAndTag,
  uploadFromUrl,
  getCreatedPins,
  getRelatedPins
} from "../controllers/pinController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http.js";

const router = express.Router();
const prisma = new PrismaClient();

// Configure multer for file uploads and set file size limit to 10mb,
// later we may improve it by using a lib to compress image size before send to AI
// more size => cost more money per request

// 10 mb
const filesize = 10485760;
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: filesize // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Only allow image files
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  }
});

router.get("/created", protect, getCreatedPins);
router.post("/uploadAndTag", protect, upload.single("image"), uploadAndTag);
router.post("/uploadImageFromUrl", protect, uploadFromUrl);
router.post("/createpin", protect, createPin);
router.put("/:id", protect, updatePin);
router.delete("/:id", protect, deletePin);
router.get("/:id", getPinById);
router.get("/", getAllPins);

// search pins by tags
router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res
        .status(BAD_REQUEST)
        .json({ error: "Search query is required" });
    }

    const allPins = await prisma.pin.findMany({
      include: {
        reactions: true
      }
    });

    const pins = allPins.filter(pin =>
      pin.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    res.json(pins);
  } catch (error) {
    console.error("Error searching pins:", error);
    res.status(INTERNAL_SERVER_ERROR).json({ error: "Internal server error" });
  }
});

router.get("/:id/related", getRelatedPins);
router.get("/:id", getPinById);
router.get("/", getAllPins);

export default router;
