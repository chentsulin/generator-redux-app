import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, PropTypes as RouterPropTypes } from 'react-router';
import routes from '../routes';


export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: RouterPropTypes.history.isRequired,
  };

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
