const ideas = require("../models/user");
const flash = require("connect-flash");

// register user
router.post("/user/register", (req, res) => {
  let errors = [];

  if (req.body.name.length < 3) {
    errors.push({ text: "Invalid user name" });
  }
});
