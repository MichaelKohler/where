import React from 'react';
import { shallow } from 'enzyme';

import TripTable from '../src/TripTable';

test('should correctly shallow render TripTable', () => {
  const trips = [{
    dateFrom: '2020-02-02',
  }, {
    dateFrom: '2020-02-03',
  }, {
    dateFrom: '2020-02-04',
  }, {
    dateFrom: '2020-02-05',
  }];
  const component = shallow(<TripTable trips={trips} />);
  expect(component).toMatchSnapshot();
});
