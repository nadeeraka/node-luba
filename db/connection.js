const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://127.0.0.1/vjot",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connect"))
  .catch(error => console.log(error));
