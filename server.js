const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  console.log("This is working!!!!!!");
});

app.listen(PORT, () => {
  console.log(`App is running on: http://localhost:${PORT}`);
});
