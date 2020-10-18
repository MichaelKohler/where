import React from 'react';
import { shallow } from 'enzyme';

import NextTripWidget from '../src/NextTripWidget';

test('should correctly render NextTripWidget without description', () => {
  const nextTrip = {
    destination: 'Bern',
    dateFrom: '2020-02-02',
    dateUntil: '2020-02-03',
  };
  const component = shallow(<NextTripWidget nextTrip={nextTrip} color="blue" />);
  expect(component).toMatchSnapshot();
});

test('should correctly render NextTripWidget with description', () => {
  const nextTrip = {
    destination: 'Bern',
    dateFrom: '2020-02-02',
    dateUntil: '2020-02-03',
    description: 'Foo',
  };
  const component = shallow(<NextTripWidget nextTrip={nextTrip} color="blue" />);
  expect(component).toMatchSnapshot();
});

test('should correctly render NextTripWidget empty if no data', () => {
  const component = shallow(<NextTripWidget />);
  expect(component).toMatchSnapshot();
});
