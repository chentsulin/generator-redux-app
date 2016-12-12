import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import CounterPage from '../CounterPage';
import configureStore from '../../store/configureStore';


const setup = initialState => {
  const store = configureStore(initialState);
  const app = mount(
    <Provider store={store}>
      <CounterPage />
    </Provider>
  );
  return {
    app,
    buttons: app.find('button'),
    p: app.find('p'),
  };
};


describe('containers', () => {
  describe('CounterPage', () => {
    it('should display initial count', () => {
      const { p } = setup();
      expect(p.text()).toMatch(/^Clicked: 0 times/);
    });

    it('should display updated count after increment button click', () => {
      const { buttons, p } = setup();
      buttons.at(0).simulate('click');
      expect(p.text()).toMatch(/^Clicked: 1 times/);
    });

    it('should display updated count after descrement button click', () => {
      const { buttons, p } = setup();
      buttons.at(1).simulate('click');
      expect(p.text()).toMatch(/^Clicked: -1 times/);
    });

    it('shouldnt change if even and if odd button clicked', () => {
      const { buttons, p } = setup();
      buttons.at(2).simulate('click');
      expect(p.text()).toMatch(/^Clicked: 0 times/);
    });

    it('should change if odd and if odd button clicked', () => {
      const { buttons, p } = setup({ counter: 1 });
      buttons.at(2).simulate('click');
      expect(p.text()).toMatch(/^Clicked: 2 times/);
    });
  });
});
