import express from "express";
import { PrismaClient } from "@prisma/client";
import {
  createPin,
  updatePin,
  deletePin,
  getAllPins,
  getPinById
} from "../controllers/pinController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
const prisma = new PrismaClient();

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
      return res.status(400).json({ error: "Search query is required" });
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
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
