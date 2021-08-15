import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../src/Footer';

test('should correctly render footer', () => {
  const { container } = render(<Footer />);
  expect(container.firstChild).toMatchSnapshot();
});
