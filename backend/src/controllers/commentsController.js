import prisma from "../prisma/client.js";
import {
  BAD_REQUEST,
  CREATED,
  INTERNAL_SERVER_ERROR,
  OK
} from "../constants/http.js";

export const getComments = async (req, res) => {
  const { pinId } = req.query;
  try {
    if (!pinId) {
      return res.status(BAD_REQUEST).json({ error: "pinId is required." });
    }

    const comments = await prisma.comment.findMany({
      where: {
        pinId: Number(pinId)
      },
      include: {
        user: {
          // Include the related User model
          select: {
            email: true,
            id: true,
            name: true
          }
        }
      }
    });

    res.json({ comments });
  } catch (err) {
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong in loading comments.", error: err });
  }
};

export const addComment = async (req, res) => {
  const { pinId, content } = req.body;
  const userId = req.user?.id;
  // Validate required fields
  if (!pinId || !userId) {
    return res
      .status(BAD_REQUEST)
      .json({ error: "pinId and userId are required." });
  }
  if (!content) {
    return res.status(BAD_REQUEST).json({ error: "Comment is empty." });
  }

  try {
    // Create a comment
    const comment = await prisma.comment.create({
      data: {
        userId: String(userId),
        pinId: Number(pinId),
        content: String(content)
      }
    });

    res.status(CREATED).json({
      message: "Comment added.",
      comment
    });
  } catch (err) {
    console.error("Add Comment Error:", err);
    res.status(INTERNAL_SERVER_ERROR).json({ error: "Failed to add comment." });
  }
};

export const deleteComment = async (req, res) => {
  const { id } = req.body;
  const userId = req.user?.id;
  console.log("in controller ", id, userId);
  try {
    await prisma.comment.delete({
      where: {
        id: Number(id)
      }
    });
    res.status(OK).json({ message: "Comment removed." });
  } catch (err) {
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ msg: "Failed to delete comment.", error: err });
  }
};
