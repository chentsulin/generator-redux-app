/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

const config = require('./webpack.config.dev');


const port = process.env.PORT || 3000;

const app = express();
const compiler = webpack(config);

compiler.apply(new DashboardPlugin());

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, 'index.html');

  compiler.outputFileSystem.readFile(filename, (err, result) => { // eslint-disable-line consistent-return
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
  });
});

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
