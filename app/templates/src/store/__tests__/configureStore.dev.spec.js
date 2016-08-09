import { expect } from 'chai';
import configureStore from '../configureStore.dev';

describe('configureStore.dev', () => {
  it('returns a store which conform redux store contract', () => {
    const store = configureStore();
    ['dispatch', 'subscribe', 'getState', 'replaceReducer'].forEach(method => {
      expect(store[method]).to.be.a('function');
    });
  });

  it('returns a store which support dispatch thunk', () => {
    const store = configureStore();
    expect(() => store.dispatch(
      () => ({ type: 'UNKNOWN' }))
    ).to.not.throw();
  });

  it('can assign preloadedState', () => {
    const preloadedState = {
      counter: 1,
    };
    const store = configureStore(preloadedState);
    expect(store.getState().counter).to.equal(1);
  });
});
