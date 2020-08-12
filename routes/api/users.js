const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

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
      // Getting user's gravatar
      const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });
      // Create a new instance of the User model
      user = new User({ name, email, avatar, password });
      // Encrypt the email/gravatar with bcryptjs. It get promise from bcrypt.js, so using await
      const salt = await bcrypt.genSalt(10); // the 10 is recommended (read doc)
      // Hash the password
      user.password = await bcrypt.hash(password, salt);
      // save the configured user
      await user.save();

      // res.send("Users route");
      res.send("User Successfully Registered!");
    } catch {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);
module.exports = router;
