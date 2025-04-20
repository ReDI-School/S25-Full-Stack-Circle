const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

// routes

// get
app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}`);
});
