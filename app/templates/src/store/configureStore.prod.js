import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducers';


const finalCreateStore = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware
)(createStore);


/**
 * Creates a preconfigured store.
 */
export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
