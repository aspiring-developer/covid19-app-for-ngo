const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");

const User = require("../../models/User");

// GET api/users (for testing purpose)
router.get("/", (req, res) => {
  res.send("Users route");
});
// POST api/users for register user
router.post(
  "/",
  [
    check("name", "Must type a name!").not().isEmpty(),
    check("email", "A valid email is required!").isEmail(),
    check("password", "Password must be 6 or more characters long").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    //console.log(req.body);
    const errors = validationResult(req);
    // Checking the error: "!errors.isEmpty()" means if there is an error
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Registering new user in the database
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });
      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }

      res.send("Users route");
    } catch {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);
module.exports = router;
