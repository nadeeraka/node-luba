const User = require("../models/user");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const passportConfig = require("../config/security/passport");

// auth with google
exports.getGoogle = ("/google",
passport.authenticate("google", {
  scope: ["profile", "email"]
}));
