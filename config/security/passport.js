const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const { key, secret } = require("../../util/secret");
const User = require("../../models/auth");

//create cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// if  retrieve data in the cooke
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// passport auth
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
      }).then(cUser => {
        if (cUser) {
          //user already in the db
          console.log("user in the db");
          //create cookie
          done(null, cUser);
        } else {
          // if not save the user
          new User({
            googleId: profile.id,
            userName: profile.displayName,
            email: profile.emails[0].value
          })
            .save()
            .then(res => console.log(res));
          //also need to send cookie for new user
          done(null, User);
        }
      });
    }
  )
);
