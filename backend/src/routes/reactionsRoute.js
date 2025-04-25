import express from "express";
const router = express.Router();
import { getReactions, addReaction, deleteReaction } from "../controllers/reactionsController";

// This method will return a count of rows with the pinId provided -> { reactions: 90, userReacted: true }
router.get("/", getReactions);
router.post("/", addReaction);
router.delete("/", deleteReaction);

export default router;
