import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutPage from './index';

const renderAboutPage = () => render(<MemoryRouter><AboutPage /></MemoryRouter>);

test('renders welcome heading', () => {
  renderAboutPage();
  expect(
    screen.getByRole('heading', { name: 'Vanessa Bautista', level: 1 })
  ).toBeInTheDocument();
});

test('renders About Me heading', () => {
  renderAboutPage();
  expect(screen.getByRole('heading', { name: 'About Me', level: 2 })).toBeInTheDocument();
});

test('renders profile picture', () => {
  renderAboutPage();
  expect(screen.getByRole('img', { name: 'Vanessa Bautista' })).toBeInTheDocument();
});

test('renders resume link', () => {
  renderAboutPage();
  expect(screen.getByRole('link', { name: 'View Resume' })).toBeInTheDocument();
});

test('renders portfolio link', () => {
  renderAboutPage();
  expect(screen.getByRole('link', { name: 'View Portfolio' })).toBeInTheDocument();
});

test('renders skills list with key technologies', () => {
  renderAboutPage();
  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('TypeScript')).toBeInTheDocument();
  expect(screen.getByText('Next.js')).toBeInTheDocument();
  expect(screen.getByText('Node.js')).toBeInTheDocument();
  expect(screen.getByText('Storybook')).toBeInTheDocument();
});

test('renders social links in hero', () => {
  renderAboutPage();
  expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument();
});
