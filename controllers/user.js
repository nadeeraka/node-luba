const ideas = require("../models/user");
const flash = require("connect-flash");
const { validationResult } = require("express-validator/check");

// register user
exports.postReg = ("/user/register",
(req, res) => {
  //   let errors = [];
  //   if (!(req.body.password === req.body.cPassword)) {
  //     errors.push({ text: "password have to match!" });
  //   }

  //   const validationError = validationResult(req);
  //   if (!validationError.isEmpty()) {
  //     console.log(validationError);
  //     errors.push({ text: validationError.array()[0].msg });
  //   }
  //   if (errors.length > 0) {
  //     res.render("api/reg", {
  //       title: "Register",
  //       e: errors,
  //       name: req.body.name,
  //       email: req.body.email,
  //       password: req.body.password,
  //       cPassword: req.body.cPassword
  //     });
  //   } else {

  //     res.render("/idea");
  //   }
  res.render("api/idea", { title: "idea", ideas: "" });
});

// user login post
exports.postLog = ("/user/register",
(req, res) => {
  //   let errors = [];
  //   const validationError = validationResult(req);
  //   if (!validationError.isEmpty()) {
  //     console.log(validationError);
  //     errors.push({ text: validationError.array()[0].msg });
  //   }
  //   if (errors.length > 0) {
  //     res.render("api/login", {
  //       title: "Login",
  //       e: errors,
  //       email: req.body.email,
  //       password: req.body.password
  //     });
  //   } else {
  //     res.render("/idea");
  //   }
  res.render("api/idea", { title: "idea", ideas: "" });
});
