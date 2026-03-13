import { render, screen } from '@testing-library/react';
import Contact from './index';

test('renders Connect heading', () => {
  render(<Contact />);
  expect(screen.getByRole('heading', { name: 'Connect', level: 1 })).toBeInTheDocument();
});

test('renders Reach Out heading', () => {
  render(<Contact />);
  expect(screen.getByRole('heading', { name: 'Reach Out', level: 2 })).toBeInTheDocument();
});

test('renders Github link', () => {
  render(<Contact />);
  const link = screen.getByRole('link', { name: 'Github' });
  expect(link).toHaveAttribute('href', 'https://github.com/vanessabau');
});

test('renders LinkedIn link', () => {
  render(<Contact />);
  expect(screen.getByRole('link', { name: 'Linkedin' })).toBeInTheDocument();
});

test('renders email link with mailto href', () => {
  render(<Contact />);
  const emailLink = screen.getByRole('link', { name: /Email/ });
  expect(emailLink).toHaveAttribute('href', 'mailto:vanessawebdev@gmail.com');
});

test('renders phone link with tel href', () => {
  render(<Contact />);
  const phoneLink = screen.getByRole('link', { name: /Phone/ });
  expect(phoneLink).toHaveAttribute('href', 'tel:9162254599');
});

test('renders Resume link', () => {
  render(<Contact />);
  expect(screen.getByRole('link', { name: 'Resume' })).toBeInTheDocument();
});
