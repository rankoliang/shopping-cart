import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('app', () => {
  describe('when an item is added to cart', () => {
    it('displays an additional item in the cart', () => {
      render(<App />);

      expect(screen.getByText(/Items in cart: 0/i)).toBeInTheDocument();

      // add the first item to cart
      act(() => {
        userEvent.click(
          screen.getAllByRole('button', { name: /add to cart/i })[0]
        );
      });

      expect(screen.getByText(/Items in cart: 1/i)).toBeInTheDocument();
    });
  });
});
