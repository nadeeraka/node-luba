const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const { key, secret } = require("../../util/secret");
const User = require("../../models/auth");
passport.use(
  new GoogleStrategy(
    {
      clientID: key,
      clientSecret: secret,
      callbackURL: "/auth/google/success"
    },
    (accessToken, refreshToken, profile, done) => {
      //     User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //         return done(err, user);
      console.log(profile);
      //check user already in the db
      User.findOne({
        googleId: profile.id
      }).then(res => {
        if (res) {
          //user already in the db
          console.log("user in the db");
        } else {
          // if not save the user
          new User({
            googleId: profile.id,
            userName: profile.displayName,
            email: profile.emails[0].value
          })
            .save()
            .then(res => console.log(res));
        }
      });
    }
  )
);
