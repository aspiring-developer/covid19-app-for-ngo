const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
// GET api/auth
router.get("/", auth, async (req, res) => {
  //res.send("Auth route");
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// POST api/users for login user
router.post(
  "/",
  [
    check("email", "A valid email is required!").isEmail(),
    check("password", "Password is required!").exists(),
  ],
  async (req, res) => {
    //console.log(req.body);
    const errors = validationResult(req);
    // Checking the error: "!errors.isEmpty()" means if there is an error
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Registering new user in the database
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });
      // check if not user then send error
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid email or password" }] });
      }

      // Make sure the password matches. The bcrypt has a method called "compare" that takes plain text PW and encrypted PW and compares (here user.password is the encrypted PW)
      const isMatch = await bcrypt.compare(password, user.password);

      // check to see if there is match or not
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid email or password" }] });
      }
      //Create a payload
      const payload = { user: { id: user.id } }; // the user.id is similar to user._id (in mongoose no need _id)
      // jwt.sign gets two arguments: payload and jwtSecret. The jwtSecret needs to hide in config/default.js file
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);
module.exports = router;
