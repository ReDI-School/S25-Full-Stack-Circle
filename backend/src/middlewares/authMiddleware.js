import prisma from "../prisma/client.js";
import { verifyToken } from "../utils/jwt.js";
import { UnauthorizedError } from "../utils/RequestError.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.split(" ")[1]
      : null;

    if (!token) {
      throw new UnauthorizedError("Not authorized, no token provided");
    }

    const decoded = verifyToken(token);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    });

    if (!user) {
      throw new UnauthorizedError("Not authorized, user not found");
    }

    req.user = {
      id: user.id,
      email: user.email,
      name: user.name
    };

    next();
  } catch (error) {
    next(error);
  }
};
