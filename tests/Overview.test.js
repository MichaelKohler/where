import React from 'react';
import { shallow } from 'enzyme';

import Overview from '../src/Overview';

test('should correctly shallow render Overview', () => {
  const component = shallow(<Overview />);
  expect(component).toMatchSnapshot();
});
