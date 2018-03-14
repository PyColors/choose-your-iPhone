const path = require("path");
// Simple path
const root = path.resolve(__dirname, "../");

module.exports = {
  entry: {
    app: ["./src/scss/index.scss", "./src/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    // For --hot
    publicPath: "/dist/"
  },
  resolve: {
    extensions: ["", ".js", ".css", ".scss"]
  },
  module: {
    // Bbefore
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint",
        exclude: /(node_modules|bower_components)/
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /(node_modules|bower_components)/,
        include: root
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: "url",
        query: {
          limit: 10000,
          name: "[name]-[hash:7].[ext]"
        }
      }
    ]
  },
  plugins: [],
  eslint: {
    configFile: path.resolve(root, "./.eslintrc"),
    formatter: require("eslint-friendly-formatter")
  }
};
