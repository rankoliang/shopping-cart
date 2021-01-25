import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('has a link to home', () => {
    render(<Navbar company={{ name: 'Amazon' }} />, { wrapper: MemoryRouter });

    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument();
  });

  it('has a link to the shop', () => {
    render(<Navbar company={{ name: 'Amazon' }} />, { wrapper: MemoryRouter });

    expect(screen.getByRole('link', { name: /^shop$/i })).toBeInTheDocument();
  });
});
