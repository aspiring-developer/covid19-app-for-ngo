// Importing dependencies
const express = require("express");
const morgan = require("morgan");

//Importing Database connection
const connectToMongoDb = require("./config/db");
// Initializing express (app)
const app = express();

// Call the database to connect
connectToMongoDb();

// Creating port for localhost and future deployment
const PORT = process.env.PORT || 5000;

//Initialize middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HTTP Request Logger
app.use(morgan("tiny"));

// Creating a simple route for testing
app.get("/", (req, res) => {
  res.send("API is working!!!!!!");
});
// Import and use the routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

// Initializing localhost server to run the app in development environment
app.listen(PORT, () => {
  console.log(`App is running on: http://localhost:${PORT}`);
});
