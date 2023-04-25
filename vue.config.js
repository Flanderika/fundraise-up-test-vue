const { defineConfig } = require("@vue/cli-service");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/fundraise-up-test-vue/" : "/",
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: "src/assets/images", to: "assets/images" }],
      }),
      new SVGSpritemapPlugin("src/assets/icons/*.svg", {
        output: {
          filename: "assets/icons/sprite.svg",
          svg4everybody: true,
        },
        sprite: {
          prefix: "icon-",
        },
      }),
    ],
  },
});
