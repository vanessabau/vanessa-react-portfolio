import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Portfolio' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
});
