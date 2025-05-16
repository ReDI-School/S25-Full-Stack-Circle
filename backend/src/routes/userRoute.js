import express from "express";
import {
  signup,
  login,
  getUserHandler,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// test get
router.get("/users", getUserHandler);

export default router;
