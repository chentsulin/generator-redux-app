import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import counter from './counter';


const rootReducer = combineReducers({
  routing: routeReducer,
  counter,
});


export default rootReducer;
