import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();
import { protect } from "../middlewares/authMiddleware.js";
import { INTERNAL_SERVER_ERROR } from "../constants/http.js";
// Status codes (to avoid "magic numbers")
const STATUS = {
  BAD_REQUEST: 400,
  CREATED: 201,
  CONFLICT: 409,
  SERVER_ERROR: 500
};

router.post("/", protect, async (req, res) => {
  const userId = req.user.id;
  const { pinId } = req.body;

  if (!userId || !pinId) {
    return res
      .status(STATUS.BAD_REQUEST)
      .json({ error: "userId and pinId are required" });
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

// Get All the pins saved by a user
router.get("/", protect, async (req, res) => {
  try {
    const userId = req.user.id;
    const savedPins = await prisma.savedPin.findMany({
      where: { userId },
      include: {
        pin: {
          include: {
            author: true,
            reactions: true,
            comments: true,
            tags: true
          }
        }
      }
    });

    const pins = savedPins.map(saved => saved.pin);
    res.json(pins);
  } catch (error) {
    console.error("Error fetching in saved pins", error);
    res.status(INTERNAL_SERVER_ERROR).json({ error: "Internal server error" });
  }
});
