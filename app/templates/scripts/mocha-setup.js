import { jsdom } from 'jsdom';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';


global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
window.localStorage = window.sessionStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key) {
    this[key] = undefined;
  },
};


// Workaround: https://github.com/airbnb/enzyme/issues/395
// require after global window & document polyfill
const chaiEnzyme = require('chai-enzyme');

chai.use(dirtyChai);
chai.use(sinonChai);
chai.use(chaiEnzyme());
