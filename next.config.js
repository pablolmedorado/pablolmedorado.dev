const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
});
