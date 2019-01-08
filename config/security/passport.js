const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const { key, secret } = require("../../util/secret");

// passport.use(
//   new GoogleStrategy(
//     {
//       //options for google strategy

//  clientID:key,
//  clientS: secret,
//           callbackURL: "http://localhost:8080/auth/google/success",
//     }
//      () => {
//          //
//      };
//   )
// );

passport.use(
  new GoogleStrategy(
    {
      clientID: key,
      clientSecret: secret,
      callbackURL: "/auth/google/success"
    },
    // function (accessToken, refreshToken, profile, done) {
    //     User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //         return done(err, user);
    //     });
    // }
    () => {}
  )
);
