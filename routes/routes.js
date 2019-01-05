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
  res.render("api/addIdea", { title: "Add idea", e: null });
});

router.get("/idea", controller.getIdeas);

router.post("/idea", controller.getPost);

router.get("/idea/edit/:id", controller.getEditIdea);

router.use((req, res) => {
  res.render("404", { title: "Error" });
});

module.exports = router;
