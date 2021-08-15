import React from 'react';
import { render } from '@testing-library/react';

import TripTableEntry from '../src/TripTableEntry';

test('should correctly shallow render TripTableEntry - past', () => {
  const trip = {
    dateFrom: '2020-02-02',
    dateUntil: '2020-02-03',
    destination: 'Bern',
    country: 'Switzerland',
    description: 'Foo',
  };
  const { container } = render(
    <table>
      <tbody>
        <TripTableEntry trip={trip} />
      </tbody>
    </table>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('should correctly shallow render TripTableEntry - past - no description', () => {
  const trip = {
    dateFrom: '2020-02-02',
    dateUntil: '2020-02-03',
    destination: 'Bern',
    country: 'Switzerland',
  };
  const { container } = render(
    <table>
      <tbody>
        <TripTableEntry trip={trip} />
      </tbody>
    </table>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('should correctly shallow render TripTableEntry - future', () => {
  const trip = {
    dateFrom: '2999-02-02',
    dateUntil: '2999-02-03',
    destination: 'Bern',
    country: 'Switzerland',
    description: 'Foo',
  };
  const { container } = render(
    <table>
      <tbody>
        <TripTableEntry trip={trip} />
      </tbody>
    </table>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
