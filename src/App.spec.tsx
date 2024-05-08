import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { App } from './App';

test('App', () => {
  render(<App />);
  const appText = screen.getByText(/HomePage/i);
  expect(appText).toBeInTheDocument();
});
