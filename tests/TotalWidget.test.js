import React from 'react';
import { shallow } from 'enzyme';

import TotalWidget from '../src/TotalWidget';

test('should correctly shallow render TotalWidget', () => {
  const totals = {
    trips: 200,
    countries: 20,
    uniqueDestinations: 15,
  };
  const component = shallow(<TotalWidget totals={totals} color="blue" />);
  expect(component).toMatchSnapshot();
});
