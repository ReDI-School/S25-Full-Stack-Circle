import dotenv from "dotenv";
dotenv.config();
import saveRoutes from "./routes/saveRoute.js";
import express from "express";
import cors from "cors";
import reactionsRoutes from "./routes/reactionsRoute.js";
import userRoutes from "./routes/userRoute.js";
import commentsRoutes from "./routes/commentsRoute.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import pinRoutes from "./routes/pinRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import { DEFAULT_PORT } from "./constants/http.js";

const app = express();
const PORT = process.env.PORT || DEFAULT_PORT;

// middleware
app.use(express.json());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.FRONTEND_URL
        : [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:5175",
            "http://127.0.0.1:5173",
            "http://127.0.0.1:5174",
            "http://127.0.0.1:5175"
          ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    exposedHeaders: ["Content-Range", "X-Content-Range"]
  })
);
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/reactions", reactionsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/pins", pinRoutes);
app.use("/api/save", saveRoutes);
app.use("/api/categories", categoryRoutes);

// get
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.warn(`Server running at http://localhost:${PORT}`);
});
