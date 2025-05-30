import prisma from "../prisma/client.js";
import {
  BAD_REQUEST,
  CONFLICT,
  CREATED,
  INTERNAL_SERVER_ERROR,
  OK
} from "../constants/http.js";

export const getReactions = async (req, res) => {
  const { pinId, userId } = req.query;
  try {
    const count = await prisma.reaction.count({
      where: { pinId: Number(pinId) }
    });

    let userReacted = false;
    if (userId) {
      const existing = await prisma.reaction.findUnique({
        where: {
          userId_pinId: { userId: Number(userId), pinId: Number(pinId) }
        }
      });
      userReacted = !!existing;
    }

    res.json({ reactions: count, userReacted });
  } catch (err) {
    return res
      .status(INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong.", error: err });
  }
};

export const addReaction = async (req, res) => {
  const { pinId, userId } = req.body;

  // Validate required fields
  if (!pinId || !userId) {
    return res
      .status(BAD_REQUEST)
      .json({ error: "pinId and userId are required." });
  }

  try {
    // Try to create a reaction
    const reaction = await prisma.reaction.create({
      data: {
        userId: Number(userId),
        pinId: Number(pinId)
      }
    });

    res.status(CREATED).json({
      message: "Reaction added.",
      reaction
    });
  } catch (err) {
    if (err.code === "P2002") {
      // Prisma unique constraint failed
      return res
        .status(CONFLICT)
        .json({ error: "User already reacted to this pin." });
    }

    console.error("Add Reaction Error:", err);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to add reaction." });
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
    res.status(OK).json({ message: "Reaction removed." });
  } catch (err) {
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ msg: "Failed to remove reaction.", error: err });
  }
};
