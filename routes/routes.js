const express = require("express");

const router = express.Router();

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

router.post("/idea", (req, res) => {
  console.log(req.body);
  const error = [];
  if (!req.body.title) {
    error.push({ text: "Please add a title" });
  } else if (!req.body.details) {
    error.push({ text: "Please add a details" });
  } else if (typeof req.body.title === "string") {
    error.push({ text: "Invalid title" });
  } else if (typeof req.body.details === "string") {
    error.push({ text: "Invalid details" });
  }
  if (error.length > 0) {
    res.render("api/addIdea", {
      error,
      title: req.body.title,
      details: req.body.details
    });
  } else {
    res.send("ok");
  }
});

router.use((req, res) => {
  res.render("404", { title: "Error" });
});

//router.use();
module.exports = router;
