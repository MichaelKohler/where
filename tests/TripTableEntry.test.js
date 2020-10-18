import React from 'react';
import { shallow } from 'enzyme';

import TripTableEntry from '../src/TripTableEntry';

test('should correctly shallow render TripTableEntry - past', () => {
  const trip = {
    dateFrom: '2020-02-02',
    dateUntil: '2020-02-03',
    destination: 'Bern',
    country: 'Switzerland',
    description: 'Foo',
  };
  const component = shallow(<TripTableEntry trip={trip} />);
  expect(component).toMatchSnapshot();
});

test('should correctly shallow render TripTableEntry - past - no description', () => {
  const trip = {
    dateFrom: '2020-02-02',
    dateUntil: '2020-02-03',
    destination: 'Bern',
    country: 'Switzerland',
  };
  const component = shallow(<TripTableEntry trip={trip} />);
  expect(component).toMatchSnapshot();
});

test('should correctly shallow render TripTableEntry - future', () => {
  const trip = {
    dateFrom: '2999-02-02',
    dateUntil: '2999-02-03',
    destination: 'Bern',
    country: 'Switzerland',
    description: 'Foo',
  };
  const component = shallow(<TripTableEntry trip={trip} />);
  expect(component).toMatchSnapshot();
});
