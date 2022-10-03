const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/finlifeapi": {
        target: "http://finlife.fss.or.kr",
        changeOrigin: true,
      },
    },
  },
});
