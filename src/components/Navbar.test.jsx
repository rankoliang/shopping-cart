import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import CartContext from '../context/CartContext';
import cart from '../reducers/cart';

describe('Navbar', () => {
  it('has a link to home', () => {
    render(
      <CartContext.Provider value={{ state: cart.initialState }}>
        <Navbar company={{ name: 'Amazon' }} />
      </CartContext.Provider>,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument();
  });

  it('has a link to the shop', () => {
    render(
      <CartContext.Provider value={{ state: cart.initialState }}>
        <Navbar company={{ name: 'Amazon' }} />
      </CartContext.Provider>,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByRole('link', { name: /^shop$/i })).toBeInTheDocument();
  });
});
