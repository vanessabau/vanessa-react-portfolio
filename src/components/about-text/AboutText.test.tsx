import { render, screen } from '@testing-library/react';
import AboutText from './index';

test('renders heading', () => {
  render(<AboutText />);
  expect(screen.getByRole('heading', { name: 'Front End Platform Engineer' })).toBeInTheDocument();
});

test('renders tagline text', () => {
  render(<AboutText />);
  expect(screen.getByText(/5\+ years building enterprise web at scale/)).toBeInTheDocument();
});
