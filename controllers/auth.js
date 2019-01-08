const User = require("../models/user");
const bcrypt = require("bcryptjs");
const passport = require("passport");

// auth with google
exports.getGoogle = ("/google",
(req, res) => {
  res.render("api/auth/login", { title: "Login" });
});
