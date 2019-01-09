const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
  res.render("api/profile/profile", { title: "profile" });
});

module.exports = router;
