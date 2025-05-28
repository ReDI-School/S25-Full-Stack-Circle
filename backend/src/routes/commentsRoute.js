import express from "express";
const router = express.Router();
import {
  getComments,
  addComment,
  deleteComment
} from "../controllers/commentsController.js";

router.get("/", getComments);
router.post("/", addComment);
router.delete("/", deleteComment);

export default router;
