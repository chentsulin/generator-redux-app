/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../../src/components/Counter';


function setup() {
  const actions = {
    increment: spy(),
    incrementIfOdd: spy(),
    incrementAsync: spy(),
    decrement: spy(),
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
}


describe('Counter component', () => {
  it('should display count', () => {
    const { p } = setup();
    expect(p).to.have.text().match(/^Clicked: 1 times/);
  });

  it('first button should call increment', () => {
    const { buttons, actions } = setup();
    buttons.at(0).simulate('click');
    expect(actions.increment).to.have.been.called;
  });

  it('second button should call decrement', () => {
    const { buttons, actions } = setup();
    buttons.at(1).simulate('click');
    expect(actions.decrement).to.have.been.called;
  });

  it('third button should call incrementIfOdd', () => {
    const { buttons, actions } = setup();
    buttons.at(2).simulate('click');
    expect(actions.incrementIfOdd).to.have.been.called;
  });

  it('fourth button should call incrementAsync', () => {
    const { buttons, actions } = setup();
    buttons.at(3).simulate('click');
    expect(actions.incrementAsync).to.have.been.called;
  });
});
