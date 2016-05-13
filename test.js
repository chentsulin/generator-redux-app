'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const pwd = path.resolve('./');


describe('generator', () => {
  let generator;

  beforeEach((done) => {
    const deps = ['../app'];

    helpers.testDirectory(path.join(__dirname, 'temp'), (err) => {
      if (err) return done(err);
      generator = helpers.createGenerator('redux-app:app', deps, null, { skipInstall: true });
      done();
    });
  });

  afterEach(() => {
    process.chdir(pwd);
  });

  it('generates expected files', (done) => {
    const expected = [
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.eslintrc',
      '.eslintignore',
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
      path.join('src', 'containers', 'AnotherPage.js'),
      path.join('src', 'containers', 'NotFoundPage.js'),
      path.join('src', 'containers', 'index.js'),
      path.join('src', 'containers', 'Root.js'),
      path.join('src', 'reducers', 'counter.js'),
      path.join('src', 'reducers', 'index.js'),
      path.join('src', 'store', 'configureStore.js'),
      path.join('src', 'utils', 'createDevToolsWindow.js'),
      path.join('src', 'index.js'),
      path.join('src', 'routes.js'),
      path.join('test', 'actions', 'counter.spec.js'),
      path.join('test', 'components', 'Counter.spec.js'),
      path.join('test', 'containers', 'CounterPage.spec.js'),
      path.join('test', 'reducers', 'counter.spec.js'),
    ];

    helpers.mockPrompt(generator, {
      moduleName: 'test',
      githubUsername: 'test',
      website: 'test.com',
      flow: false,
    });

    generator.run(() => {
      assert.file(expected);
      done();
    });
  });

  it('flow option', (done) => {
    helpers.mockPrompt(generator, {
      moduleName: 'test',
      githubUsername: 'test',
      website: 'test.com',
      flow: true,
    });

    generator.run(() => {
      assert.file('.flowconfig');
      assert.fileContent('package.json', /"check":/);
      done();
    });
  });
});
