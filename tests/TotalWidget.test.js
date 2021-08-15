import React from 'react';
import { render } from '@testing-library/react';

import TotalWidget from '../src/TotalWidget';

test('should correctly shallow render TotalWidget', () => {
  const totals = {
    trips: 200,
    countries: 20,
    uniqueDestinations: 15,
  };
  const { container } = render(<TotalWidget totals={totals} color="blue" />);
  expect(container.firstChild).toMatchSnapshot();
});
