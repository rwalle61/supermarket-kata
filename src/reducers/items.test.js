import items, { addItemToBasket, removeItemFromBasket } from './items';

describe('items reducer', () => {
  describe('addItemToBasket', () => {
    it('adds the item to the basket', () => {
      expect(addItemToBasket({}, 'Beans')).toEqual({
        Beans: 1,
      });
    });
    it('increments the existing beans', () => {
      expect(
        addItemToBasket(
          {
            Beans: 1,
          },
          'Beans',
        ),
      ).toEqual({
        Beans: 2,
      });
    });
    it('increments the existing coke', () => {
      expect(
        addItemToBasket(
          {
            Coke: 1,
          },
          'Coke',
        ),
      ).toEqual({
        Coke: 2,
      });
    });
    it('increments the existing oranges', () => {
      expect(
        addItemToBasket(
          {
            Oranges: 0.2,
          },
          'Oranges',
        ),
      ).toEqual({
        Oranges: 0.4,
      });
    });
    it('increments the existing oranges twice (verify float addition)', () => {
      const basket0 = {
        Oranges: 0.2,
      };
      const basket1 = addItemToBasket(basket0, 'Oranges');
      const basket2 = addItemToBasket(basket1, 'Oranges');
      expect(basket2).toEqual({
        Oranges: 0.6,
      });
    });
  });
  describe('removeItemFromBasket', () => {
    it('removes nothing from an empty basket', () => {
      expect(removeItemFromBasket({}, 'Beans')).toEqual({});
    });
    it('removes an item from the basket when there is only 1 increment in the basket', () => {
      expect(removeItemFromBasket({ Beans: 1 }, 'Beans')).toEqual({});
    });
    it('removes another item from the basket there is only 1 (different) increment in the basket', () => {
      expect(removeItemFromBasket({ Oranges: 0.2 }, 'Oranges')).toEqual({});
    });
    it('removes the correct item from the basket', () => {
      expect(removeItemFromBasket({ Beans: 1, Coke: 1 }, 'Beans')).toEqual({
        Coke: 1,
      });
    });
    it('decrements the existing Beans', () => {
      expect(removeItemFromBasket({ Beans: 2 }, 'Beans')).toEqual({
        Beans: 1,
      });
    });
    it('decrements the existing Coke', () => {
      expect(removeItemFromBasket({ Coke: 2 }, 'Coke')).toEqual({
        Coke: 1,
      });
    });
    it('decrements the existing Oranges', () => {
      expect(removeItemFromBasket({ Oranges: 1 }, 'Oranges')).toEqual({
        Oranges: 0.8,
      });
    });
    it('decrements the existing Oranges twice (verify float subtraction)', () => {
      const basket0 = {
        Oranges: 1,
      };
      const basket1 = removeItemFromBasket(basket0, 'Oranges');
      const basket2 = removeItemFromBasket(basket1, 'Oranges');
      expect(basket2).toEqual({
        Oranges: 0.6,
      });
    });
  });
  describe('items', () => {
    it('handles initial state', () => {
      expect(items(undefined, {})).toEqual({});
    });

    describe('when state contains no items', () => {
      it.skip('handles ADD_ITEM_TO_BASKET by rejecting the invalid item', () => {
        expect(
          items(
            {},
            {
              type: 'ADD_ITEM_TO_BASKET',
              name: 'UnknownItem',
            },
          ),
        ).toEqual({});
      });
      it('handles ADD_ITEM_TO_BASKET by adding the new item', () => {
        expect(
          items(
            {},
            {
              type: 'ADD_ITEM_TO_BASKET',
              name: 'Beans',
            },
          ),
        ).toEqual({
          Beans: 1,
        });
      });
    });

    describe('when state contains items', () => {
      it('handles ADD_ITEM_TO_BASKET by adding the new item', () => {
        expect(
          items(
            { Beans: 1 },
            {
              type: 'ADD_ITEM_TO_BASKET',
              name: 'Coke',
            },
          ),
        ).toEqual({
          Beans: 1,
          Coke: 1,
        });
      });
      it('handles ADD_ITEM_TO_BASKET by increasing the quantity of the existing basket item', () => {
        expect(
          items(
            { Beans: 1 },
            {
              type: 'ADD_ITEM_TO_BASKET',
              name: 'Beans',
            },
          ),
        ).toEqual({
          Beans: 2,
        });
      });
      it('handles REMOVE_ITEM_FROM_BASKET by removing the only existing basket item', () => {
        expect(
          items(
            { Beans: 1 },
            {
              type: 'REMOVE_ITEM_FROM_BASKET',
              name: 'Beans',
            },
          ),
        ).toEqual({});
      });
      it('handles REMOVE_ITEM_FROM_BASKET by removing the second existing basket item', () => {
        expect(
          items(
            { Beans: 1, Coke: 1 },
            {
              type: 'REMOVE_ITEM_FROM_BASKET',
              name: 'Coke',
            },
          ),
        ).toEqual({ Beans: 1 });
      });
      it('handles REMOVE_ITEM_FROM_BASKET by reducing the quantity of the existing basket item', () => {
        expect(
          items(
            { Beans: 2 },
            {
              type: 'REMOVE_ITEM_FROM_BASKET',
              name: 'Beans',
            },
          ),
        ).toEqual({ Beans: 1 });
      });
    });
  });
});
