const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Luba" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

router.use((req, res) => {
  res.render("404", { title: "Error" });
});

//router.use();
module.exports = router;
