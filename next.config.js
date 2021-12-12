const path = require("path");

module.exports = {
  images: {
    domains: ["via.placeholder.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
