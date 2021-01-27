import cart from './cart';

const { initialState, reducer } = cart;

describe('cart', () => {
  describe('initialState', () => {
    it('is a new map', () => {
      expect(initialState).toEqual(new Map());
    });
  });

  describe('reducer', () => {
    describe('when the action is set', () => {
      it("sets the item's quantity", () => {
        let item = { name: 'item name' };
        expect(
          reducer(initialState, { type: 'set', item, quantity: 1 })
        ).toEqual(new Map([[item, 1]]));
      });
    });

    describe('when the action is remove', () => {
      it('removes the item from the state', () => {
        let item = { name: 'item name' };
        const cart = reducer(initialState, { type: 'set', item, quantity: 1 });

        expect(reducer(cart, { type: 'remove', item }).has(item)).toBe(false);
      });
    });
  });
});
