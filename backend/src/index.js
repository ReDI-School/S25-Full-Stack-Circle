import express from "express";
import cors from "cors";
import reactionsRoutes from "./routes/reactionsRoute.js";
import userRoutes from "./routes/userRoute.js";
import commentsRoutes from "./routes/commentsRoute.js";

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/reactions", reactionsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/comments", commentsRoutes);

// get
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  // TODO: Replace with proper logger
  console.info(`Server is running in port: ${PORT}`);
});
