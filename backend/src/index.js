import express from "express";
import cors from "cors";
import reactionsRoutes from "./routes/reactionsRoute.js";
const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/reactions", reactionsRoutes);

// get
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  // TODO: Replace with proper logger
  console.info(`Server is running in port: ${PORT}`);
});
