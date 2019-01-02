const express = require("express");

const app = express();
const router = require("./routes/routes");
const db = require("./db/connection");
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//body parser
app.use(bodyParser.json());

// lode the model
require("./models/schema");

app.use(router);

// set the view engine to ejs
app.set("view engine", "ejs");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
