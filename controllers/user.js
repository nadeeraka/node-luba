const ideas = require("../models/user");
const User = require("../models/user");
const _ = require("lodash");
const flash = require("connect-flash");
const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");

const findEmail = async email => {
  let result = await User.findOne({
    email
  });
  return result;
};

// register user
exports.postReg = ("/user/register",
(req, res) => {
  let errors = [];
  if (!(req.body.name && req.body.email && req.body.password)) {
    errors.push({ text: "you have to fill all the fields" });
  }
  //bcrypt password
  const run = async pass => {
    let password = await bcrypt.hash(pass, 12);
    return password;
  };
  //calling findEmail
  const emailStatus = findEmail(req.body.email);
  //const encrypt = run(req.body.password);

  if (!(req.body.password === req.body.cPassword)) {
    errors.push({ text: "password have to match!" });
  }
  const validationError = validationResult(req);
  //let emailRes;
  if (!validationError.isEmpty()) {
    console.log(validationError);
    errors.push({ text: validationError.array()[0].msg });
  }
  //   User.findOne({ email: req.body.email }).then(res => {
  //     errors.push({ text: "Email alrady use" });
  //     console.log(res);
  //   });
  //console.log("email :", emailRes);
  //  errors.push({ text: "Email alrady use" });
  //   User.findOne({ email: req.body.email })
  //     .then(doc => {
  //       if (doc) {
  //         let emailRes = "email already used!";
  //         errors.push({ text: emailRes });
  //         //return res.redirect("user/login");
  //       }
  //     })
  //     .catch(err => console.log(err));

  if (errors.length > 0) {
    res.render("api/reg", {
      title: "Errors Found",
      e: errors,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cPassword: req.body.cPassword
    });
  } else {
    emailStatus.then(doc => {
      if (doc) {
        res.render("api/reg", {
          title: "Errors Found",
          e: [{ text: "email already used !" }]
        });
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        newUser = {
          name: req.body.name,
          email: req.body.email,
          password: hash
        };
        new User(newUser)
          .save()
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
        res.render("api/idea", { title: "idea", ideas: "" });
      }
    });
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
