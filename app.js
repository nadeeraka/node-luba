const express = require("express");

const app = express();
const router = require("./routes/routes");

app.use(router);

// set the view engine to ejs
app.set("view engine", "ejs");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
