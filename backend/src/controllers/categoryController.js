import prisma from "../prisma/client.js";
import {
  BAD_REQUEST,
  CREATED,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  OK
} from "../constants/http.js";

/**
 * GET /api/categories
 * Get all categories
 */
export const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        title: "asc"
      }
    });

    res.status(OK).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(INTERNAL_SERVER_ERROR).json({
      message: "Failed to fetch categories",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error"
    });
  }
};

/**
 * GET /api/categories/:id
 * Get a category by ID
 */
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.findUnique({
      where: { id: parseInt(id) },
      include: {
        pins: true
      }
    });

    if (!category) {
      return res.status(NOT_FOUND).json({ message: "Category not found" });
    }

    res.status(OK).json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(INTERNAL_SERVER_ERROR).json({
      message: "Failed to fetch category",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error"
    });
  }
};

/**
 * POST /api/categories
 * Create a new category
 */
export const createCategory = async (req, res) => {
  try {
    const { title, imageUrl, description } = req.body;

    if (!title) {
      return res
        .status(BAD_REQUEST)
        .json({ message: "Category title is required" });
    }

    const existingCategory = await prisma.category.findFirst({
      where: {
        title: {
          equals: title,
          mode: "insensitive"
        }
      }
    });

    if (existingCategory) {
      return res
        .status(BAD_REQUEST)
        .json({ message: "Category with this title already exists" });
    }

    const category = await prisma.category.create({
      data: {
        title,
        imageUrl,
        description
      }
    });

    res.status(CREATED).json(category);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(INTERNAL_SERVER_ERROR).json({
      message: "Failed to create category",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error"
    });
  }
};

/**
 * PUT /api/categories/:id
 * Update a category
 */
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl, description } = req.body;

    const existingCategory = await prisma.category.findUnique({
      where: { id: parseInt(id) }
    });

    if (!existingCategory) {
      return res.status(NOT_FOUND).json({ message: "Category not found" });
    }

    // Check if the new title already exists in another category
    if (title && title !== existingCategory.title) {
      const duplicateTitle = await prisma.category.findFirst({
        where: {
          title: {
            equals: title,
            mode: "insensitive"
          },
          id: {
            not: parseInt(id)
          }
        }
      });

      if (duplicateTitle) {
        return res
          .status(BAD_REQUEST)
          .json({ message: "Category with this title already exists" });
      }
    }

    const updatedCategory = await prisma.category.update({
      where: { id: parseInt(id) },
      data: {
        title: title || existingCategory.title,
        imageUrl: imageUrl !== undefined ? imageUrl : existingCategory.imageUrl,
        description:
          description !== undefined ? description : existingCategory.description
      }
    });

    res.status(OK).json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(INTERNAL_SERVER_ERROR).json({
      message: "Failed to update category",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error"
    });
  }
};

/**
 * DELETE /api/categories/:id
 * Delete a category
 */
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const existingCategory = await prisma.category.findUnique({
      where: { id: parseInt(id) },
      include: { pins: true }
    });

    if (!existingCategory) {
      return res.status(NOT_FOUND).json({ message: "Category not found" });
    }

    // Update pins to remove the category reference
    if (existingCategory.pins.length > 0) {
      await prisma.pin.updateMany({
        where: { categoryId: parseInt(id) },
        data: { categoryId: null }
      });
    }

    await prisma.category.delete({
      where: { id: parseInt(id) }
    });

    res.status(OK).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(INTERNAL_SERVER_ERROR).json({
      message: "Failed to delete category",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error"
    });
  }
};

/**
 * GET /api/categories/:id/pins
 * Get all pins in a category
 */
export const getCategoryPins = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.findUnique({
      where: { id: parseInt(id) },
      include: {
        pins: {
          include: {
            author: true,
            reactions: true
          }
        }
      }
    });

    if (!category) {
      return res.status(NOT_FOUND).json({ message: "Category not found" });
    }

    res.status(OK).json(category.pins);
  } catch (error) {
    console.error("Error fetching category pins:", error);
    res.status(INTERNAL_SERVER_ERROR).json({
      message: "Failed to fetch category pins",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error"
    });
  }
};
