// potentially fragile tests
// can be removed if shopping cart is tested
import cart from './cart';

const { initialState, reducer } = cart;

describe('cart', () => {
  describe('initialState', () => {
    it('is a new map', () => {
      expect(initialState).toEqual(new Map());
    });
  });

  describe('reducer', () => {
    const item = { name: 'item name' };
    describe('when the action is set', () => {
      it("sets the item's quantity", () => {
        expect(
          reducer(initialState, { type: 'set', item, quantity: 1 })
        ).toEqual(new Map([[item, 1]]));
      });

      describe('when the quantity is 0', () => {
        it('removes the item', () => {
          expect(
            reducer(initialState, { type: 'set', item, quantity: 0 }).has(item)
          ).toBe(false);
        });
      });

      describe('when the quantity is negative', () => {
        it('removes the item', () => {
          expect(
            reducer(initialState, { type: 'set', item, quantity: -1 }).has(item)
          ).toBe(false);
        });
      });
    });

    describe('when the action is remove', () => {
      it('removes the item from the state', () => {
        const cart = reducer(initialState, { type: 'set', item, quantity: 1 });

        expect(reducer(cart, { type: 'remove', item }).has(item)).toBe(false);
      });
    });

    describe('when the action is increment', () => {
      describe('when the item is not present', () => {
        it("sets the item's quantity to one", () => {
          expect(reducer(initialState, { type: 'increment', item })).toEqual(
            new Map([[item, 1]])
          );
        });
      });

      describe('when the item is present', () => {
        it("adds one to the item's quantity", () => {
          const cart = reducer(initialState, { type: 'increment', item });

          expect(reducer(cart, { type: 'increment', item })).toEqual(
            new Map([[item, 2]])
          );
        });
      });
    });

    describe('when the action is decrement', () => {
      describe('when the item is not present', () => {
        it('does nothing', () => {
          expect(reducer(initialState, { type: 'decrement', item })).toEqual(
            initialState
          );
        });
      });

      describe('when there is more than one of an item', () => {
        it("adds one to the item's quantity", () => {
          const cart = reducer(initialState, {
            type: 'set',
            item,
            quantity: 2,
          });

          expect(reducer(cart, { type: 'decrement', item })).toEqual(
            new Map([[item, 1]])
          );
        });
      });

      describe('when there is only one of an item', () => {
        it('removes the item', () => {
          const cart = reducer(initialState, {
            type: 'set',
            item,
            quantity: 1,
          });

          expect(reducer(cart, { type: 'decrement', item }).has(item)).toBe(
            false
          );
        });
      });
    });

    describe('when the action is empty', () => {
      it('empties the cart', () => {
        const cart = reducer(initialState, {
          type: 'set',
          item,
          quantity: 2,
        });

        expect(reducer(cart, { type: 'empty' })).toEqual(initialState);
      });
    });
  });
});
