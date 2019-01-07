const bcrypt = require("bcryptjs");

const run = async pass => {
  const password = await bcrypt.hash(pass, 12);
  console.log(password);
};
run("password");
