import { render, screen } from '@testing-library/react';
import AboutText from './index';

test('renders heading', () => {
  render(<AboutText />);
  expect(screen.getByRole('heading', { name: 'Full Stack Awesomeness' })).toBeInTheDocument();
});

test('renders tagline text', () => {
  render(<AboutText />);
  expect(screen.getByText(/I love to build web applications/)).toBeInTheDocument();
});
