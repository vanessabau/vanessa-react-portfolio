import { render, screen } from '@testing-library/react';
import PortfolioCard from './index';
import type { Project } from '../../types';

const mockProject: Project = {
  id: 1,
  name: 'Test App',
  image: 'test.png',
  description: 'A test application',
  tech: 'React, TypeScript',
  href: 'https://example.com',
  github: 'https://github.com/test/repo',
};

describe('PortfolioCard', () => {
  beforeEach(() => {
    render(<PortfolioCard {...mockProject} />);
  });

  test('renders project name as heading', () => {
    expect(screen.getByRole('heading', { name: 'Test App' })).toBeInTheDocument();
  });

  test('renders project description', () => {
    expect(screen.getByText('A test application')).toBeInTheDocument();
  });

  test('renders tech stack', () => {
    expect(screen.getByText(/React, TypeScript/)).toBeInTheDocument();
  });

  test('renders screenshot image with alt text', () => {
    expect(screen.getByRole('img', { name: 'Screenshot of Test App' })).toBeInTheDocument();
  });

  test('renders deployed app link with correct href and target', () => {
    const link = screen.getByRole('link', { name: 'View deployed app for Test App' });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
  });

  test('renders github link with correct href and target', () => {
    const link = screen.getByRole('link', { name: 'GitHub repository for Test App' });
    expect(link).toHaveAttribute('href', 'https://github.com/test/repo');
    expect(link).toHaveAttribute('target', '_blank');
  });

  test('renders as an article element', () => {
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
