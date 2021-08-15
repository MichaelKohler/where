import React from 'react';
import { render } from '@testing-library/react';

import NextTripWidget from '../src/NextTripWidget';

test('should correctly render NextTripWidget without description', () => {
  const nextTrip = {
    destination: 'Bern',
    dateFrom: '2020-02-02',
    dateUntil: '2020-02-03',
  };
  const { container } = render(<NextTripWidget nextTrip={nextTrip} color="blue" />);
  expect(container.firstChild).toMatchSnapshot();
});

test('should correctly render NextTripWidget with description', () => {
  const nextTrip = {
    destination: 'Bern',
    dateFrom: '2020-02-02',
    dateUntil: '2020-02-03',
    description: 'Foo',
  };
  const { container } = render(<NextTripWidget nextTrip={nextTrip} color="blue" />);
  expect(container.firstChild).toMatchSnapshot();
});

test('should correctly render NextTripWidget empty if no data', () => {
  const { container } = render(<NextTripWidget />);
  expect(container.firstChild).toMatchSnapshot();
});
