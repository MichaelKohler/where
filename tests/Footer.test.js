import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../src/Footer';

test('should correctly render footer', () => {
  const component = shallow(<Footer />);
  expect(component).toMatchSnapshot();
});
