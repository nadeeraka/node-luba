const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const passport = require("passport");

router.get("/google", authController.getGoogle);
router.get("/google/success", passport.authenticate("google"), (req, res) => {
  res.send("ok");
});
router.get("/logout", (req, res) => {
  res.send("404");
});

module.exports = router;
