import { expect } from 'chai';
import createReducer from '../createReducer';


const INIT_ACTION = '@@test/INIT_ACTION';
const ACTION = 'ACTION';

const createNextStateHandler = (nextState) => ({
  [ACTION]: () => nextState,
});

describe('utils', () => {
  describe('createReducer', () => {
    describe('handle number state', () => {
      it('should return initial state when be called first time', () => {
        const initialState = 1;
        const reducer = createReducer(initialState, { [ACTION]: () => {} });
        expect(reducer(undefined, { type: INIT_ACTION })).to.equal(initialState);
      });

      it('should return next state when receive action', () => {
        const initialState = 1;
        const nextState = 2;
        const reducer = createReducer(initialState, createNextStateHandler(nextState));
        const prevState = reducer(undefined, { type: INIT_ACTION });
        expect(reducer(prevState, { type: ACTION })).to.equal(nextState);
      });
    });

    describe('handle object state', () => {
      it('should return initial state when be called first time', () => {
        const initialState = {
          key: 1,
        };
        const reducer = createReducer(initialState, { [ACTION]: () => {} });
        expect(reducer(undefined, { type: INIT_ACTION })).to.equal(initialState);
      });

      it('should return next state when receive action', () => {
        const initialState = {
          key: 1,
        };
        const nextState = {
          key: 2,
        };
        const reducer = createReducer(initialState, createNextStateHandler(nextState));
        const prevState = reducer(undefined, { type: INIT_ACTION });
        expect(reducer(prevState, { type: ACTION })).to.equal(nextState);
      });
    });

    describe('handle array state', () => {
      it('should return initial state when be called first time', () => {
        const initialState = [1, 2, 3, 4];
        const reducer = createReducer(initialState, { [ACTION]: () => {} });
        expect(reducer(undefined, { type: INIT_ACTION })).to.equal(initialState);
      });

      it('should return next state when receive action', () => {
        const initialState = [1, 2, 3, 4];
        const nextState = [5, 6, 7, 8];
        const reducer = createReducer(initialState, createNextStateHandler(nextState));
        const prevState = reducer(undefined, { type: INIT_ACTION });
        expect(reducer(prevState, { type: ACTION })).to.equal(nextState);
      });
    });
  });
});
