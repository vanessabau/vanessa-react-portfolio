import { render, screen } from '@testing-library/react';
import Footer from './index';

test('renders footer landmark', () => {
  render(<Footer />);
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

test('renders copyright text', () => {
  render(<Footer />);
  expect(screen.getByText(/© 2020 Vanessa Ro/)).toBeInTheDocument();
});
