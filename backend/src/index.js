import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;
import cors from "cors";

// middleware
app.use(express.json());
app.use(cors());

// routes

// get
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  // TODO: Replace with proper logger
  console.log(`Server is running in port: ${PORT}`);
});
