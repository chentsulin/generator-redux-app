import { expect } from 'chai';
import { createStore } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import rootReducer from '../';
import counter from '../counter';

describe('rootReducer', () => {
  it('initial state of the root reducer should matches store\'s state', () => {
    const store = createStore(rootReducer);
    expect(store.getState().counter).to.equal(counter(undefined, {}));
    expect(store.getState().routing).to.equal(routing(undefined, {}));
  });

  it('handles action', () => {
    const store = createStore(rootReducer);
    const action = { type: 'INCREMENT' };
    store.dispatch(action);
    expect(store.getState().counter).to.equal(counter(undefined, action));
    expect(store.getState().routing).to.equal(routing(undefined, action));
  });
});
