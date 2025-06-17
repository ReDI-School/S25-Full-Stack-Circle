import express from "express";
import {
  getAllCategories,
  getCategoryById,
  getCategoryPins
} from "../controllers/categoryController.js";

const router = express.Router();

// Public routes
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.get("/:id/pins", getCategoryPins);

export default router;
