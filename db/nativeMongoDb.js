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
const _db;
const aws = "mongodb://127.0.0.1/max/";
const connect = async () => {
    try {
    let con2 = await MongoClient.connect(
      aws,
      { useNewUrlParser: true }
    );
    _db = client.db();
       console.log("Connected !");
  } catch (error) {
    console.log(error);
  }
};

const getDb = () =>
{
  if(_db){
    return _db;
  }
  return false;
}


exports.connect = connect;
exports.getDb = getDb;
