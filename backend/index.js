const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "POST",
  })
);
app.use(express.json());
app.post("/api/submit", async (req, res) => {
  const { phonenumber } = req.body;

  try {
    const response = await axios.post("https://chimpu.xyz/api/post.php", {
      phonenumber,
    });

    res.json(response.headers);
  } catch (error) {
    console.error("External API Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
