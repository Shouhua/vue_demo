var webpack = require('webpack');
var rm = require('rimraf');
var path = require('path');
var config = require('./webpack.config');
var Server = require('webpack-dev-server');
var rsync = require('rsyncwrapper');

rm(path.resolve(__dirname, 'dist'), (err) => {
  if (err) throw err;

  rsync({
    src: path.resolve(__dirname, 'static'),
    dest: path.resolve(__dirname, 'dist'),
    recursive: true
  }, (error, stdout, stderr, cmd) => {

    config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server');
    var compiler = webpack(config);

    var serverOptions = Object.assign({}, config.devServer, {
      stats: {
        colors: true,
        errors: true,
        modules: false
      },
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true,
      publicPath: '/'
    });
    var server = new Server(compiler, serverOptions);
    server.listen(8080);

  });
});