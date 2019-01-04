const mongoose = require("mongoose");

const connect = async () => {
  try {
    const aws = await mongoose.connect(
      "mongodb://localhost/vjot",
      { useNewUrlParser: true }
    );

    if (aws) {
      console.log("connect !");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
