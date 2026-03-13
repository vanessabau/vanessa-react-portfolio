import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Portfolio' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
});

test('renders skip link to main content', () => {
  render(<App />);
  const skipLink = screen.getByRole('link', { name: 'Skip to main content' });
  expect(skipLink).toBeInTheDocument();
  expect(skipLink).toHaveAttribute('href', '#main-content');
});

test('renders main content landmark', () => {
  render(<App />);
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
  expect(main).toHaveAttribute('id', 'main-content');
});

test('renders navigation landmark', () => {
  render(<App />);
  expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});
