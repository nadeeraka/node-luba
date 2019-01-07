const ideas = require("../models/user");
const flash = require("connect-flash");
const { validationResult } = require("express-validator/check");

// register user
exports.postReg = ("/user/register",
(req, res) => {
  let errors = [];
  if (!(req.body.name && req.body.email && req.body.password)) {
    errors.push({ text: "you have to fill all the fields" });
  }
  if (!(req.body.password === req.body.cPassword)) {
    errors.push({ text: "password have to match!" });
  }

  const validationError = validationResult(req);

  if (!validationError.isEmpty()) {
    console.log(validationError);
    errors.push({ text: validationError.array()[0].msg });
  }
  if (errors.length > 0) {
    res.render("api/reg", {
      title: "Register",
      e: errors,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cPassword: req.body.cPassword
    });
  } else {
    res.render("api/idea", { title: "idea", ideas: "" });
    //     res.render("/idea");
  }
});

// user login post
exports.postLog = ("/user/register",
(req, res) => {
  let errors = [];
  if (!(req.body.email && req.body.password)) {
    errors.push({ text: "you have to fill all the fields" });
  }
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    console.log(validationError);
    errors.push({ text: validationError.array()[0].msg });
  }
  if (errors.length > 0) {
    res.render("api/login", {
      title: "Login",
      e: errors,
      email: req.body.email,
      password: req.body.password
    });
  } else {
    res.render("api/idea", { title: "idea", ideas: "" });
  }
  //req.isLogin = true;
});
