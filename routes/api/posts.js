const { profile_url } = require("gravatar");
const express = require("express");
const router = express.Router();

// GET api/posts
router.get("/", (req, res) => {
  res.send("Posts route");
});
module.exports = router;
