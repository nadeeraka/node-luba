const mongoose = require("mongoose");
const { db } = require("../../util/secret");
const mLabConnect = async () => {
  try {
    const result = await mongoose.connect(
      db,
      { useNewUrlParser: true }
    );
    console.log("connect to mLab!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = mLabConnect;
