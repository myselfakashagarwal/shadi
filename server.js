const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const path = require("path");
const config = require("./webpack.config.js");

const app = express();
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
