const express = require("express");

const router = express.Router();

// to import controller
const controller = require("../controllers/controller");
router.get("/", (req, res) => {
  res.render("index", { title: "Luba" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

router.get("/addIdea", (req, res) => {
  res.render("api/addIdea", { title: "Add idea" });
});

router.get("/idea", (req, res) => {
  res.render("api/idea", { title: "Idea" });
});

router.post("/idea", controller.getPost);

router.use((req, res) => {
  res.render("404", { title: "Error" });
});

module.exports = router;
