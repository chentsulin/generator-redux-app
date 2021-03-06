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
      '.gitignore',
      '.eslintrc.json',
      '.eslintignore',
      '.travis.yml',
      '.babelrc',
      'CHANGELOG.md',
      'LICENSE',
      'package.json',
      'README.md',
      'server.js',
      'webpack.config.dev.js',
      'webpack.config.prod.js',
      path.join('src', 'actions', 'counter.js'),
      path.join('src', 'actions', '__tests__', 'counter.spec.js'),
      path.join('src', 'components', 'Counter.js'),
      path.join('src', 'components', '__tests__', 'Counter.spec.js'),
      path.join('src', 'components', 'Main.js'),
      path.join('src', 'containers', 'App.js'),
      path.join('src', 'containers', 'CounterPage.js'),
      path.join('src', 'containers', '__tests__', 'CounterPage.spec.js'),
      path.join('src', 'containers', 'AnotherPage.js'),
      path.join('src', 'containers', 'NotFoundPage.js'),
      path.join('src', 'containers', 'index.js'),
      path.join('src', 'containers', 'Root.js'),
      path.join('src', 'reducers', 'counter.js'),
      path.join('src', 'reducers', '__tests__', 'counter.spec.js'),
      path.join('src', 'reducers', 'index.js'),
      path.join('src', 'reducers', '__tests__', 'index.spec.js'),
      path.join('src', 'store', 'configureStore.js'),
      path.join('src', 'store', '__tests__', 'configureStore.spec.js'),
      path.join('src', 'store', 'configureStore.dev.js'),
      path.join('src', 'store', '__tests__', 'configureStore.dev.spec.js'),
      path.join('src', 'store', 'configureStore.prod.js'),
      path.join('src', 'store', '__tests__', 'configureStore.prod.spec.js'),
      path.join('src', 'utils', 'createReducer.js'),
      path.join('src', 'utils', '__tests__', 'createReducer.spec.js'),
      path.join('src', 'index.js'),
      path.join('src', 'index.css'),
      path.join('src', 'index.html'),
      path.join('src', 'createRoutes.js'),
      path.join('src', '__tests__', 'createRoutes.spec.js'),
      path.join('__mocks__', 'styleMock.js'),
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
