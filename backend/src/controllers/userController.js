import prisma from "../prisma/client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  BAD_REQUEST,
  CREATED,
  INTERNAL_SERVER_ERROR,
  OK
} from "../constants/http.js";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(BAD_REQUEST)
        .json({ message: "Email and Password is required" });
    }
    const max = 6;
    if (password.length < max) {
      return res
        .status(BAD_REQUEST)
        .json({ message: "Password must be atleast 6 characters" });
    }

    const cycles = 10;
    const hashedPassword = await bcrypt.hash(password, cycles);
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword, name }
    });

    res
      .status(CREATED)
      .json({ message: "User Signed up successfully", user: newUser });
  } catch (error) {
    console.error("Error in signup controller", error.message);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(BAD_REQUEST)
        .json({ message: "Email and Password is required" });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(BAD_REQUEST).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(BAD_REQUEST).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    res.status(OK).json({ message: "Login successfull!", token });
  } catch (error) {
    console.error("Error is login controller", error.message);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};
