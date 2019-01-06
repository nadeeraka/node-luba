const express = require("express");

const router = express.Router();

const { check } = require("express-validator/check");
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

router.post(
  "/idea",
  check("title")
    .isAlphanumeric()
    .withMessage("Invalid type")
    .isLength({ max: 40, min: 3 })
    .withMessage("Invalid Length"),
  check("details")
    .isAlpha()
    .withMessage("Please use text")
    .isLength({ max: 50, min: 4 })
    .withMessage("Invalid Length"),
  controller.getPost
);

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
router.post("/user/register", (req, res) => {
  console.log(req.body);
  res.render("api/login", { title: "Register" });
});

router.use((req, res) => {
  res.render("404", { title: "Error" });
});

module.exports = router;
