import { render, screen } from '@testing-library/react';
import AboutPage from './index';

test('renders welcome heading', () => {
  render(<AboutPage />);
  expect(
    screen.getByRole('heading', { name: "Welcome, I'm Vanessa Bautista", level: 1 })
  ).toBeInTheDocument();
});

test('renders About Me heading', () => {
  render(<AboutPage />);
  expect(screen.getByRole('heading', { name: 'About Me', level: 2 })).toBeInTheDocument();
});

test('renders profile picture', () => {
  render(<AboutPage />);
  expect(screen.getByRole('img', { name: 'Vanessa Bautista' })).toBeInTheDocument();
});

test('renders resume link', () => {
  render(<AboutPage />);
  expect(screen.getByRole('link', { name: 'View Resume' })).toBeInTheDocument();
});

test('renders portfolio link', () => {
  render(<AboutPage />);
  expect(screen.getByRole('link', { name: 'View Portfolio' })).toBeInTheDocument();
});

test('renders skills list with key technologies', () => {
  render(<AboutPage />);
  expect(screen.getByText('HTML')).toBeInTheDocument();
  expect(screen.getByText('CSS')).toBeInTheDocument();
  expect(screen.getByText('Node')).toBeInTheDocument();
  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('MongoDB/Mongoose')).toBeInTheDocument();
});

test('renders YouTube social link', () => {
  render(<AboutPage />);
  expect(screen.getByText('YouTube: Vanessa Bautista')).toBeInTheDocument();
});
