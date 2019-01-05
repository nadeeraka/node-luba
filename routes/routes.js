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

router.delete("/idea/delete/:id", controller.delete);

router.put("/idea/edit/:id", controller.putIdea);

// user login
router.get("/user/login", (req, res) => {
  res.render("api/login", { title: "Login" });
});
router.get("/user/register", (req, res) => {
  res.render("api/reg", { title: "Register" });
});

router.use((req, res) => {
  res.render("404", { title: "Error" });
});

module.exports = router;
