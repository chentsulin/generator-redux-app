import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, PropTypes as RouterPropTypes } from 'react-router';
import configureStore from '../store/configureStore';
import routes from '../routes';


const store = configureStore();


export default class Root extends Component {
  static propTypes = {
    history: RouterPropTypes.history.isRequired
  };

  render() {
    return (
      <Provider store={store} key="provider">
        <Router history={this.props.history} children={routes} />
      </Provider>
    );
  }
}
