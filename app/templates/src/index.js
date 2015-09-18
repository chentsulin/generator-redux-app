import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import { createHistory } from 'history';


const history = createHistory();


ReactDOM.render(
  <Root history={history} />,
  document.getElementById('root')
);
