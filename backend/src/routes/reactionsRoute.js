import express from "express"
const router = express.Router();



router.get('/', getReactions);  //This method will return a count of rows with the pinId provided -> { reactions: 90, userReacted: true }
router.post('/', addReaction);
router.delete('/', deleteReaction);

export default router