const express = require("express");
const app = express();
const router = require("./routes/routes");
const connect = require("./db/connection");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const authRoutes = require("./routes/auth");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//body parser
app.use(bodyParser.json());
//express session
app.use(
  session({
    secret: "keyboard",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);
// flash
app.use(flash());

//static folder
app.use(express.static(path.join(__dirname, "public")));
// global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// override with POST
app.use(methodOverride("_method"));
// lode the model {mongoose}
//require("./models/schema");

// mongodb
//const connect = require("./db/nativeMongoDb");
// to choose mysql db use sql
// auth routes
app.use("/auth", authRoutes);

app.use(router);
// set the view engine to ejs
app.set("view engine", "ejs");

// typical mongo db connection
connect();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
