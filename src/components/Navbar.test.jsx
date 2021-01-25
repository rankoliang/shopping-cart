import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('has a link to home', () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });
});
