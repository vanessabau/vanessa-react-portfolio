import { render, screen } from '@testing-library/react';
import ErrorBoundary from './index';

const ThrowError = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <p>All good</p>
      </ErrorBoundary>
    );
    expect(screen.getByText('All good')).toBeInTheDocument();
  });

  test('renders fallback when a child throws', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Return home' })).toHaveAttribute('href', '/');
  });

  test('fallback preserves main content landmark', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute('id', 'main-content');
  });
});
