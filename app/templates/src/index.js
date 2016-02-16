import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { browserHistory } from 'react-router';


render(
  <Root history={browserHistory} />,
  document.getElementById('root')
);
