const path = require("path");
const lernaGetPackages = require("lerna-get-packages");

const { LERNA_PACKAGE_NAME } = process.env;
const ALL_PACKAGES = lernaGetPackages(__dirname);
const PACKAGE_ROOT_DIR = process.cwd();
const PACKAGE = ALL_PACKAGES.find(
  pkg => pkg.package.name === LERNA_PACKAGE_NAME
).package;

if (!PACKAGE.entry) {
  process.exit(0);
}

const INPUT_FILE = path.join(PACKAGE_ROOT_DIR, PACKAGE.entry);

module.exports = {
  entry: ["@babel/polyfill", INPUT_FILE],
  output: {
    filename: path.basename(PACKAGE.main),
    path: path.join(PACKAGE_ROOT_DIR, path.dirname(PACKAGE.main)),
    libraryTarget: "umd"
  },

  mode: "development",

  devtool: "inline-source-map",

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  }
};
