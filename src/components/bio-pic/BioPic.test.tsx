import { render, screen } from '@testing-library/react';
import BioPic from './index';

test('renders profile image with accessible alt text', () => {
  render(<BioPic />);
  expect(screen.getByRole('img', { name: 'Vanessa Bautista' })).toBeInTheDocument();
});

test('profile image has correct id', () => {
  render(<BioPic />);
  expect(document.getElementById('profile_pic')).toBeInTheDocument();
});
