import { render, screen } from '@testing-library/react';
import Contact from './index';

test('renders Let\'s Connect heading', () => {
  render(<Contact />);
  expect(screen.getByRole('heading', { name: "Let's Connect", level: 1 })).toBeInTheDocument();
});

test('renders GitHub card with link', () => {
  render(<Contact />);
  expect(screen.getByRole('heading', { name: 'GitHub', level: 3 })).toBeInTheDocument();
  const link = screen.getByRole('link', { name: 'View Profile →' });
  expect(link).toHaveAttribute('href', 'https://github.com/vanessabau');
});

test('renders LinkedIn card with link', () => {
  render(<Contact />);
  expect(screen.getByRole('heading', { name: 'LinkedIn', level: 3 })).toBeInTheDocument();
  const link = screen.getByRole('link', { name: 'Connect →' });
  expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/vanessa-bautista-45906b19b/');
});

test('renders Email card with mailto link', () => {
  render(<Contact />);
  const emailLink = screen.getByRole('link', { name: 'Email Me →' });
  expect(emailLink).toHaveAttribute('href', 'mailto:vanessawebdev@gmail.com');
});

test('renders resume download link', () => {
  render(<Contact />);
  const resumeLink = screen.getByRole('link', { name: 'Download Resume' });
  expect(resumeLink).toHaveAttribute('href', '/vanessaBau-resume.pdf');
});

test('renders YouTube link', () => {
  render(<Contact />);
  expect(screen.getByRole('link', { name: 'Application demos on YouTube' })).toBeInTheDocument();
});
