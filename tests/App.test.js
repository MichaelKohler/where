import React from 'react';
import { render } from '@testing-library/react';

import App from '../src/App';

test('should correctly shallow render App', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});
