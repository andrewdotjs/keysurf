const path = require("node:path");
const express = require("express");
const app = express();

const PORT = 3000;

app.use("/public", express.static("public"));
app.use("/dist", express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});