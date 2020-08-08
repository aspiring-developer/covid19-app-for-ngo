const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("This is working!!!!!!");
});

app.listen(PORT, () => {
  console.log(`App is running on: http://localhost:${PORT}`);
});
