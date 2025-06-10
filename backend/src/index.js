import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import reactionsRoutes from "./routes/reactionsRoute.js";
import userRoutes from "./routes/userRoute.js";
import commentsRoutes from "./routes/commentsRoute.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import pinRoutes from "./routes/pinRoute.js";
import { DEFAULT_PORT } from "./constants/http.js";

const app = express();
const PORT = process.env.PORT || DEFAULT_PORT;

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/reactions", reactionsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/pins", pinRoutes);

// get
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.warn(`Server running at http://localhost:${PORT}`);
});
