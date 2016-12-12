import React from 'react';
import { shallow } from 'enzyme';

import Counter from '../Counter';


const setup = () => {
  const actions = {
    increment: jest.fn(),
    incrementIfOdd: jest.fn(),
    incrementAsync: jest.fn(),
    decrement: jest.fn(),
  };
  const component = shallow(
    <Counter counter={1} {...actions} />
  );
  return {
    component,
    actions,
    buttons: component.find('button'),
    p: component.find('p'),
  };
};


describe('Counter component', () => {
  it('should display count', () => {
    const { p } = setup();
    expect(p.text()).toMatch(/^Clicked: 1 times/);
  });

  it('first button should call increment', () => {
    const { buttons, actions } = setup();
    buttons.at(0).simulate('click');
    expect(actions.increment).toBeCalled();
  });

  it('second button should call decrement', () => {
    const { buttons, actions } = setup();
    buttons.at(1).simulate('click');
    expect(actions.decrement).toBeCalled();
  });

  it('third button should call incrementIfOdd', () => {
    const { buttons, actions } = setup();
    buttons.at(2).simulate('click');
    expect(actions.incrementIfOdd).toBeCalled();
  });

  it('fourth button should call incrementAsync', () => {
    const { buttons, actions } = setup();
    buttons.at(3).simulate('click');
    expect(actions.incrementAsync).toBeCalled();
  });
});
