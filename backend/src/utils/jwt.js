import jwt from "jsonwebtoken";
import { UnauthorizedError } from "./RequestError.js";

export const generateToken = payload => {
  jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

export const verifyToken = token => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error("error msg:", error);
    throw new UnauthorizedError("Invalid or expired token");
  }
};
