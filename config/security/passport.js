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
      new User({
        googleId: profile.id,
        userName: profile.displayName,
        email: profile.emails[0].value
      })
        .save()
        .then(res => console.log(res));
    }
  )
);
