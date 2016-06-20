import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';


const router = routerMiddleware(browserHistory);

/**
 * Creates a preconfigured store.
 */
const configureStore = (initialState) =>
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, router)
  );


export default configureStore;
