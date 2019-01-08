const passport = require("passport");
const googleaStrategy = require("passport-google-oauth20");

passport.use(
  new googleaStrategy({
    //options for google strategy
  }),
  () => {}
);
