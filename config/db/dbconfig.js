if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: "mongodb://nick:TzCN8KHfJd6MvAa@ds257640.mlab.com:57640/vidjot"
  };
} else {
  module.exports = {
    mongoURI: "mongodb://localhost/vidjot"
  };
}
