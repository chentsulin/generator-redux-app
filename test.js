'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var pwd = path.resolve('./');


describe('generator', function() {
  this.timeout(60000);

  beforeEach(function(cb) {
    var deps = ['../app'];

    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) return cb(err);
      this.generator = helpers.createGenerator('redux-app:app', deps, null, { skipInstall: true });
      cb();
    }.bind(this));
  });

  afterEach(function() {
    process.chdir(pwd);
  });

  it('generates expected files', function(cb) {
    var expected = [
			'.editorconfig',
			'.gitattributes',
			'.gitignore',
			'.eslintrc',
			'.travis.yml',
      '.babelrc',
			'CHANGELOG.md',
			'LICENSE',
			'package.json',
			'README.md',
      'index.html',
      'server.js',
      'webpack.config.js',
      'webpack.config.production.js',
      path.join('src', 'actions', 'counter.js'),
      path.join('src', 'components', 'Counter.js'),
      path.join('src', 'components', 'Main.js'),
      path.join('src', 'containers', 'App.js'),
      path.join('src', 'containers', 'CounterPage.js'),
      path.join('src', 'containers', 'index.js'),
      path.join('src', 'containers', 'Root.js'),
      path.join('src', 'reducers', 'counter.js'),
      path.join('src', 'reducers', 'index.js'),
      path.join('src', 'store', 'configureStore.js'),
      path.join('src', 'utils', '.gitkeep'),
      path.join('src', 'index.js'),
      path.join('src', 'routes.js'),
      path.join('test', 'actions', 'counter.spec.js'),
      path.join('test', 'components', 'Counter.spec.js'),
      path.join('test', 'containers', 'CounterPage.spec.js'),
      path.join('test', 'reducers', 'counter.spec.js')
		];

    helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com',
			flow: false
		});

    this.generator.run(function() {
      assert.file(expected);
      cb();
    });
  });

  it('flow option', function(cb) {
    helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com',
			flow: true
		});

    this.generator.run(function() {
      assert.file('.flowconfig');
      assert.fileContent('package.json', /"check":/);
      cb();
    });
  });
});
