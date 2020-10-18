import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';

test('should correctly shallow render App', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
