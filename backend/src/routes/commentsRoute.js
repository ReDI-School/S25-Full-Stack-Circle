import express from "express";
const router = express.Router();
import {
  getComments,
  addComment,
  deleteComment
} from "../controllers/commentsController.js";
import { protect } from "../middlewares/authMiddleware.js";

router.get("/", getComments);
router.post("/", protect, addComment);
router.delete("/", protect, deleteComment);

export default router;
