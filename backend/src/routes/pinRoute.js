import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// search pins by tags
router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }

    const pins = await prisma.pin.findMany({
      where: {
        tags: {
          hasSome: [query]
        }
      },
      include: {
        reactions: true
      }
    });

    res.json(pins);
  } catch (error) {
    console.error("Error searching pins:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
