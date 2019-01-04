const express = require("express");

const app = express();
const router = require("./routes/routes");
const connect = require("./db/connection");
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//body parser
app.use(bodyParser.json());

// lode the model {mongoose}
//require("./models/schema");

// mongodb
//const connect = require("./db/nativeMongoDb");
// to choose mysql db use sql

app.use(router);

// set the view engine to ejs
app.set("view engine", "ejs");
// calling to db
// connect(cli => {
//   console.log(cli), app.listen(8080);
// });

// typical mongo db connection
connect();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
