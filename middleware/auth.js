const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Bring token from header
  const token = req.header("x-auth-token");
  // Check if there is a token or not
  if (!token) {
    return res
      .status(401)
      .json({ msg: "No token available. Authorization failed!" });
  }
  // Verifying token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "The Token is invalid!" });
  }
};
