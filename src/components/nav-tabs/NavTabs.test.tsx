import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavTabs from './index';

const renderNavTabs = (path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <NavTabs />
    </MemoryRouter>
  );

describe('NavTabs', () => {
  test('renders all three navigation links', () => {
    renderNavTabs();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Portfolio' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  test('marks About as current page on root path', () => {
    renderNavTabs('/');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Portfolio' })).not.toHaveAttribute('aria-current');
    expect(screen.getByRole('link', { name: 'Contact' })).not.toHaveAttribute('aria-current');
  });

  test('marks Portfolio as current page on /portfolio path', () => {
    renderNavTabs('/portfolio');
    expect(screen.getByRole('link', { name: 'Portfolio' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current');
    expect(screen.getByRole('link', { name: 'Contact' })).not.toHaveAttribute('aria-current');
  });

  test('marks Contact as current page on /contact path', () => {
    renderNavTabs('/contact');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current');
    expect(screen.getByRole('link', { name: 'Portfolio' })).not.toHaveAttribute('aria-current');
  });

  test('adds active class to the current page link', () => {
    renderNavTabs('/portfolio');
    expect(screen.getByRole('link', { name: 'Portfolio' })).toHaveClass('active');
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveClass('active');
  });
});
