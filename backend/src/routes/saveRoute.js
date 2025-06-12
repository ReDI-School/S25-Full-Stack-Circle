import express from "express";
import { PrismaClient } from "@prisma/client";
import { protect } from "../middleware/authMiddleware.js"; // token auth

const router = express.Router();
const prisma = new PrismaClient();

const STATUS = {
  BAD_REQUEST: 400,
  CREATED: 201,
  CONFLICT: 409,
  SERVER_ERROR: 500,
};

// Secure pin save route
router.post("/", protect, async (req, res) => {
  const { id: userId } = req.user; // extracted from JWT token
  const { pinId } = req.body;

  if (!pinId) {
    return res
      .status(STATUS.BAD_REQUEST)
      .json({ error: "pinId is required" });
  }

  try {
    const saved = await prisma.savedPin.create({
      data: {
        userId,
        pinId
      }
    });

    res.status(STATUS.CREATED).json({ message: "Pin saved!", saved });
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(STATUS.CONFLICT).json({ error: "Pin already saved!" });
    }

    console.error("Save error:", error);
    res.status(STATUS.SERVER_ERROR).json({ error: "Internal server error" });
  }
});

export default router;
