import express from "express";
import {
  signup,
  login,
  getAllUsersHandler,
  getCurrentUser
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// test get
router.use(protect);
router.get("/users", getAllUsersHandler);
router.get("/me", getCurrentUser);

export default router;
