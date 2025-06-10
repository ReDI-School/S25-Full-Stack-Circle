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
        OR: [
          {
            title: {
              contains: query,
              mode: 'insensitive', // Case-insensitive search
            },
          },
          {
            description: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            tags: {
              has: query, // Checks if the exact query string is in the tags array
            },
          },
        ],
      },
      include: {
        reactions: true, // You can keep this if you need reaction counts on the search results page
      },
    });
/*
    const allPins = await prisma.pin.findMany({
      include: {
        reactions: true
      }
    });

    const pins = allPins.filter(pin =>
      pin.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
*/
    res.json(pins);
  } catch (error) {
    console.error("Error searching pins:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
