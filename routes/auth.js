const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.get("/google", authController.getGoogle);

router.get("/logout", (req, res) => {
  res.send("404");
});

module.exports = router;
