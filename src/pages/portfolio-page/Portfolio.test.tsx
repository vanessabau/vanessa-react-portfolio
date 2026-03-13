import { render, screen } from '@testing-library/react';
import Portfolio from './index';
import projectData from '../../data/projects';

test('renders Portfolio heading', () => {
  render(<Portfolio />);
  expect(screen.getByRole('heading', { name: 'Portfolio', level: 1 })).toBeInTheDocument();
});

test(`renders all ${projectData.length} project cards`, () => {
  render(<Portfolio />);
  expect(screen.getAllByRole('article')).toHaveLength(projectData.length);
});

test('renders a heading for each project', () => {
  render(<Portfolio />);
  projectData.forEach((project) => {
    expect(screen.getByRole('heading', { name: project.name, level: 2 })).toBeInTheDocument();
  });
});

test('renders deployed app and github links for each project', () => {
  render(<Portfolio />);
  projectData.forEach((project) => {
    expect(
      screen.getByRole('link', { name: `View deployed app for ${project.name}` })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: `GitHub repository for ${project.name}` })
    ).toBeInTheDocument();
  });
});
