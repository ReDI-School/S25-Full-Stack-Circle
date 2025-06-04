import prisma from "../prisma/client.js";
import { INTERNAL_SERVER_ERROR, OK, UNAUTHORIZED } from "../constants/http.js";

// Creating new pin
export const createPin = async (req, res) => {
  console.log(req.body);
  try {
    const {
      title,
      description,
      link,
      altText,
      // relatedProductIds = [], // Array of related pin IDs
      tagName = [], // Array of existing tag IDs
      newTags = [],
      isAllowedtoComment,
      showSimilarProduct,
      imageUrl
    } = req.body;

    const userId = req.user?.id;

    // uploading the Image

    let image;
    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    } else if (imageUrl) {
      image = imageUrl;
    } else {
      return res
        .status(400)
        .json({ message: "Image is required (upload or URL)" });
    }
    /* Check for existing board or create the board */
    let userBoard = await prisma.board.findFirst({
      where: {
        userId: userId
      }
    });

    if (!userBoard) {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      const boardName = user?.name ? `${user.name}'s board` : "My Board";
      userBoard = await prisma.board.create({
        data: {
          name: boardName,
          userId: userId
        }
      });
    }

    const pin = await prisma.pin.create({
      data: {
        title,
        imageUrl: image,
        description,
        link,
        altText,
        isAllowedtoComment: isAllowedtoComment ?? true,
        showSimilarProduct: showSimilarProduct ?? false,
        author: { connect: { id: userId } },
        board: { connect: { id: userBoard.id } },
        tags: {
          connect: tagName.map(name => {
            return { name };
          }),
          create: newTags.map(name => {
            return { name };
          })
        }
      },
      include: {
        author: true,
        board: true,
        tags: true
      }
    });
    res.status(201).json(pin);
  } catch (error) {
    console.error("Error in creating new Pin", error.message);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};
export const updatePin = async (req, res) => {
  try {
    const pinId = parseInt(req.params.id);
    const userId = req.user.id;
    const {
      title,
      description,
      link,
      altText,
      isAllowedtoComment,
      showSimilarProduct,
      imageUrl,
      tagName = [],
      newTags = []
    } = req.body;
    const currentPin = await prisma.pin.findUnique({ where: { id: pinId } });
    if (currentPin.authorId !== userId) {
      return res
        .status(UNAUTHORIZED)
        .json({ message: "Not authorized to update this pin" });
    }
    const updatedPin = await prisma.pin.update({
      where: { id: pinId },
      data: {
        title,
        description,
        link,
        altText,
        imageUrl,
        isAllowedtoComment,
        showSimilarProduct,
        tags: {
          set: [],
          connect: tagName.map(name => {
            return { name };
          }),
          create: newTags.map(name => {
            return { name };
          })
        }
      },
      include: { tags: true, author: true, board: true }
    });

    res.json(updatedPin);
  } catch (error) {
    console.error("Error in updating the pin", error);
    res.status(INTERNAL_SERVER_ERROR).json({ message: "Can't update the pin" });
  }
};
export const deletePin = async (req, res) => {
  try {
    const pinId = parseInt(req.params.id);
    const userId = req.user.id;

    const currentPin = await prisma.pin.findUnique({ where: { id: pinId } });
    if (!currentPin) {
      return res.status(404).json({ message: "Pin not found" });
    }
    if (currentPin.authorId !== userId) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this pin" });
    }

    await prisma.pin.delete({ where: { id: pinId } });

    res.json({ message: "Pin deleted successfully" });
  } catch (error) {
    console.error("Error deleting pin:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getAllPins = async (req, res) => {
  try {
    console.log("Fetching pins...");
    const pins = await prisma.pin.findMany({
      include: {
        author: true,
        board: true,
        tags: true
      }
    });
    res.status(OK).json({ pins });
  } catch (error) {
    console.error("Error deleting pin:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// Get Pin by Id
export const getPinById = async (req, res) => {
  try {
    const pinId = parseInt(req.params.id);
    const pin = await prisma.pin.findUnique({
      where: { id: pinId },
      include: {
        author: true,
        board: true,
        tags: true
      }
    });

    if (!pin) {
      return res.status(404).json({ message: "Pin not found" });
    }

    res.status(200).json(pin);
  } catch (error) {
    console.error("Error fetching pin by ID:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
