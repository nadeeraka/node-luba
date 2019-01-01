const express = require("express");

const app = express();
const router = require("./routes/routes");
const db = require("./db/connection");

// lode the model
require("./models/schema");

app.use(router);

// set the view engine to ejs
app.set("view engine", "ejs");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
