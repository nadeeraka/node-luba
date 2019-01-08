const User = require("../models/user");
const bcrypt = require("bcryptjs");
const passport = require("passport");

// auth with google
exports.getGoogle = ("/google",
(req, res) => {
  res.send("ok");
});
