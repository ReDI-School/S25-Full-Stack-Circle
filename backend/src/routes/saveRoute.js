import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Status codes (to avoid "magic numbers")
const STATUS = {
  BAD_REQUEST: 400,
  CREATED: 201,
  CONFLICT: 409,
  SERVER_ERROR: 500
};

router.post("/", async (req, res) => {
  const { userId, pinId } = req.body;

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
