import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { userId, pinId } = req.body;

  if (!userId || !pinId) {
    return res.status(400).json({ error: "userId and pinId are required" });
  }

  try {
    const saved = await prisma.savedPin.create({
      data: {
        userId,
        pinId,
      },
    });

    res.status(201).json({ message: "Pin saved!", saved });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: "Pin already saved!" });
    }
    console.error("Save error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
