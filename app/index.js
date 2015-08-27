'use strict';

var normalizeUrl = require('normalize-url');
var path = require('path');
var humanizeUrl = require('humanize-url');
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');
var _s = require('underscore.string');


module.exports = yeoman.generators.Base.extend({
	init: function() {
    var cb = this.async();

    this.prompt([{
			name: 'moduleName',
			message: 'What do you want to name your app?',
			default: this.appname.replace(/\s/g, '-'),
			filter: function(val) {
				return _s.slugify(val);
			}
		}, {
			name: 'githubUsername',
			message: 'What is your GitHub username?',
			store: true,
			validate: function(val) {
				return val.length > 0 ? true : 'You have to provide a username';
			}
		}, {
			name: 'website',
			message: 'What is the URL of your website?',
			store: true,
			validate: function(val) {
        return val.length > 0 ? true : 'You have to provide a website URL';
			},
			filter: function(val) {
        return normalizeUrl(val);
			}
		}, {
      name: 'flow',
      message: 'Do you need to use flow type?',
      type: 'confirm',
      default: false
    }],
    function(props) {
      var asyncCount = 0;
      this.moduleName = props.moduleName;
      this.camelModuleName = _s.camelize(props.moduleName);
      this.githubUsername = props.githubUsername;
      this.name = this.user.git.name();
      this.email = this.user.git.email();
      this.website = props.website;
      this.humanizedWebsite = humanizeUrl(this.website);
      this.flow = props.flow;


      this.template('editorconfig', '.editorconfig');
      this.template('gitattributes', '.gitattributes');
      this.template('gitignore', '.gitignore');
      this.template('eslintrc', '.eslintrc');
      this.template('travis.yml', '.travis.yml');
      this.template('index.html');
      this.template('server.js');
      this.template('webpack.config.js');
      this.template('webpack.config.production.js');
      this.template('LICENSE');
      this.template('CHANGELOG.md');
      // needed so npm doesn't try to use it and fail
      this.template('_package.json', 'package.json');
      this.template('README.md');
      this.template('babelrc', '.babelrc');

      if (this.flow) {
        this.template('flowconfig', '.flowconfig');
      }

      this.directory('src', 'src');
      this.directory('test', 'test');

      cb();

    }.bind(this));
	},
	install: function() {
    this.installDependencies({ bower: false });
  }
});
