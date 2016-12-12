import * as actions from '../counter';


describe('actions', () => {
  it('increment should create increment action', () => {
    expect(actions.increment()).toEqual({
      type: actions.INCREMENT_COUNTER,
    });
  });

  it('decrement should create decrement action', () => {
    expect(actions.decrement()).toEqual({
      type: actions.DECREMENT_COUNTER,
    });
  });

  it('incrementIfOdd should create increment action', () => {
    const fn = actions.incrementIfOdd();
    expect(fn).toBeInstanceOf(Function);
    const dispatch = jest.fn();
    const getState = () => ({ counter: 1 });
    fn(dispatch, getState);
    expect(dispatch).toBeCalledWith({
      type: actions.INCREMENT_COUNTER,
    });
  });

  it('incrementIfOdd shouldnt create increment action if counter is even', () => { // eslint-disable-line max-len
    const fn = actions.incrementIfOdd();
    const dispatch = jest.fn();
    const getState = () => ({ counter: 2 });
    fn(dispatch, getState);
    expect(dispatch).not.toBeCalled();
  });

  // There's no nice way to test this at the moment...
  it('incrementAsync', done => {
    const fn = actions.incrementAsync(1);
    expect(fn).toBeInstanceOf(Function);
    const dispatch = jest.fn();
    fn(dispatch);
    setTimeout(() => {
      expect(dispatch).toBeCalledWith({
        type: actions.INCREMENT_COUNTER,
      });
      done();
    }, 5);
  });
});
