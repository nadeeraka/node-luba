const ideas = require("../models/schema");

exports.getIdeas = ("/idea",
(req, res) => {
  ideas
    .find({})
    .sort({ date: "desc" })
    .then(ideas => {
      res.render("api/idea", { title: "Idea", ideas, id: "" });
    });
});
exports.getEditIdea = ("/idea/edit/:id",
(req, res) => {
  ideas
    .findOne({
      _id: req.params.id
    })
    .then(ideas => {
      res.render("api/edit", { title: "edit", ideas });
    });
});

exports.getPost = ("/idea",
(req, res) => {
  //console.log(req.body);
  let error = [];
  if (!req.body.title) {
    error.push({ text: "Please add a title" });
  } else if (!req.body.details) {
    error.push({ text: "Please add a details" });
  }
  // else if (req.body.title.length > 40) {
  //     error.push({ text: "Please make it short" });
  //   } else if (typeof (req.body.details > 80)) {
  //     error.push({ text: "Please make it short" });
  //   }
  if (error.length > 0) {
    res.render("api/addIdea", {
      e: error,
      title: req.body.title,
      details: req.body.details
    });
  } else {
    const user = {
      title: req.body.title,
      details: req.body.details
    };
    new ideas(user)
      .save()
      .then(result => {
        res.redirect("/idea");
      })
      .catch(err => {
        console.log(err);
      });
  }
});
