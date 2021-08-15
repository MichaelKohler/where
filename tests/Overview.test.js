import React from 'react';
import { render } from '@testing-library/react';

import Overview from '../src/Overview';

test('should correctly shallow render Overview', () => {
  const { container } = render(<Overview />);
  expect(container.firstChild).toMatchSnapshot();
});
