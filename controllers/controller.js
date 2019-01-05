const ideas = require("../models/schema");

const putEdit = async (id, r) => {
  //const ideas = require("../models/schema");
  if (!id) {
    throw new Error("Id is not found !");
  }
  const res = await ideas.findById(id);
  console.log("ok");
  res.title = r.title;
  res.details = r.details;

  const saving = await res.save();
  res.redirect("api/idea", { title: "Idea" });
  console.log(saving);
};
//get ideas
exports.getIdeas = ("/idea",
(req, res) => {
  ideas
    .find({})
    .sort({ date: "desc" })
    .then(ideas => {
      res.render("api/idea", { title: "Idea", ideas, id: "" });
    });
});
// delete

exports.delete = ("/idea/delete/:id",
(req, res) => {
  ideas
    .deleteOne({
      _id: req.params.id
    })
    .then(r => {
      res.redirect("/idea");
    })
    .catch(err => {
      console.error("errors found ", err);
    });
});

//update || put from edit page
exports.putIdea = ("/idea/edit/:id",
(req, res) => {
  ideas
    .findById({
      _id: req.params.id
    })
    .then(data => {
      data.title = req.body.title;
      data.details = req.body.details;
      data.save().then(data => {
        console.log("save");
        res.redirect("/idea");
      });
    });
});

// get edit idea
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

// if you save idea from add idea page

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
