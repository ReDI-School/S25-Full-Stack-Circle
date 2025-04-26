import prisma from "../prisma/client.js";

export const getReactions = async (req, res) => {
  const { pinId, userId } = req.query;
  try {
    const count = await prisma.reaction.count({ where: { pinId: Number(pinId) } });

    let userReacted = false;
    if (userId) {
      const existing = await prisma.reaction.findUnique({
        where: { userId_pinId: { userId: Number(userId), pinId: Number(pinId) } }
      });
      userReacted = !!existing;
    }

    res.json({ reactions: count, userReacted });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong." });
  }
};

export const addReaction = async (req, res) => {
  const { pinId, userId } = req.body;

  // Validate required fields
  if (!pinId || !userId) {
    return res.status(400).json({ error: "pinId and userId are required." });
  }

  try {
    // Try to create a reaction
    const reaction = await prisma.reaction.create({
      data: {
        userId: Number(userId),
        pinId: Number(pinId)
      }
    });

    res.status(201).json({
      message: "Reaction added.",
      reaction
    });
  } catch (err) {
    if (err.code === "P2002") {
      // Prisma unique constraint failed
      return res.status(409).json({ error: "User already reacted to this pin." });
    }

    console.error("Add Reaction Error:", err);
    res.status(500).json({ error: "Failed to add reaction." });
  }
};

export const deleteReaction = async (req, res) => {
  const { pinId, userId } = req.body;
  try {
    await prisma.reaction.delete({
      where: {
        userId_pinId: {
          userId: Number(userId),
          pinId: Number(pinId)
        }
      }
    });
    res.status(200).json({ message: "Reaction removed." });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove reaction." });
  }
};
