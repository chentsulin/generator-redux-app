/* eslint-disable no-unused-vars */
import createReducer from '../utils/createReducer';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';


const initialState = 0;

const counter = createReducer(initialState, {
  [INCREMENT_COUNTER]: (state, action) => state + 1,

  [DECREMENT_COUNTER]: (state, action) => state - 1,
});


export default counter;
