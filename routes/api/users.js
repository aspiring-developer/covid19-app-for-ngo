const express = require("express");
const router = express.Router();

// GET api/users
router.get("/", (req, res) => {
  res.send("Users route");
});
// POST api/users for register user
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Users route");
});
module.exports = router;
