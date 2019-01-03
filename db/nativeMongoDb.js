const { MongoClient } = require("mongodb");
const connection = require("../util/secret");
// MongoClient.connect(
//   connection,
//   { useNewUrlParser: true }
// )
//   .then(console.log("connect"))
//   .catch(err => console.log(err));
// const connection3 = {
//   auth: {
//     user: MONGO_DB_USER,
//     password: MONGO_DB_PASSWORD
//   }
// };
const aws = "mongodb://127.0.0.1/max/";
const connect = async callback => {
  //   let con1 = await MongoClient.connect(
  //     connection,
  //     { useNewUrlParser: true }
  //   );
  try {
    let con2 = await MongoClient.connect(
      aws,
      { useNewUrlParser: true }
    );
    console.log(callback);
    console.log("Connected !");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
