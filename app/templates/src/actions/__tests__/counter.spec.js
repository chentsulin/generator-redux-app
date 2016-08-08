/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../counter';


describe('actions', () => {
  it('increment should create increment action', () => {
    expect(actions.increment()).to.deep.equal({ type: actions.INCREMENT_COUNTER });
  });

  it('decrement should create decrement action', () => {
    expect(actions.decrement()).to.deep.equal({ type: actions.DECREMENT_COUNTER });
  });

  it('incrementIfOdd should create increment action', () => {
    const fn = actions.incrementIfOdd();
    expect(fn).to.be.a('function');
    const dispatch = spy();
    const getState = () => ({ counter: 1 });
    fn(dispatch, getState);
    expect(dispatch).to.have.been.calledWith({ type: actions.INCREMENT_COUNTER });
  });

  it('incrementIfOdd shouldnt create increment action if counter is even', () => {
    const fn = actions.incrementIfOdd();
    const dispatch = spy();
    const getState = () => ({ counter: 2 });
    fn(dispatch, getState);
    expect(dispatch).to.have.not.been.called;
  });

  // There's no nice way to test this at the moment...
  it('incrementAsync', (done) => {
    const fn = actions.incrementAsync(1);
    expect(fn).to.be.a('function');
    const dispatch = spy();
    fn(dispatch);
    setTimeout(() => {
      expect(dispatch).to.have.been.calledWith({ type: actions.INCREMENT_COUNTER });
      done();
    }, 5);
  });
});
