// Importing dependencies
const express = require("express");
const morgan = require("morgan");

// Initializing express (app)
const app = express();

// Creating port for localhost and future deployment
const PORT = process.env.PORT || 5000;

// Importing to use dotenv
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//HTTP Request Logger
app.use(morgan("tiny"));

// Creating a simple route for testing
app.get("/", (req, res) => {
  res.send("API is working!!!!!!");
});

// Initializing localhost server to run the app in development environment
app.listen(PORT, () => {
  console.log(`App is running on: http://localhost:${PORT}`);
});
