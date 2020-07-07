import {
  addItemToBasketPure,
  removeItemFromBasketPure,
  priceItems,
  priceItem,
} from './App.utils';

describe('App.utils', () => {
  describe('addItemToBasketPure', () => {
    it('adds the item to the basket', () => {
      expect(addItemToBasketPure({}, 'Beans')).toEqual({
        Beans: 1,
      });
    });
    it('increments the existing beans', () => {
      expect(
        addItemToBasketPure(
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
        addItemToBasketPure(
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
        addItemToBasketPure(
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
      const basket1 = addItemToBasketPure(basket0, 'Oranges');
      const basket2 = addItemToBasketPure(basket1, 'Oranges');
      expect(basket2).toEqual({
        Oranges: 0.6,
      });
    });
  });
  describe('removeItemFromBasketPure', () => {
    it('removes nothing from an empty basket', () => {
      expect(removeItemFromBasketPure({}, 'Beans')).toEqual({});
    });
    it('removes an item from the basket when there is only 1 increment in the basket', () => {
      expect(removeItemFromBasketPure({ Beans: 1 }, 'Beans')).toEqual({});
    });
    it('removes another item from the basket there is only 1 (different) increment in the basket', () => {
      expect(removeItemFromBasketPure({ Oranges: 0.2 }, 'Oranges')).toEqual({});
    });
    it.skip('removes the correct item from the basket', () => {
      expect(removeItemFromBasketPure({ Beans: 1, Coke: 1 }, 'Beans')).toEqual({
        Coke: 1,
      });
    });
  });
  describe('priceItem', () => {
    it('prices items to 2DP', () => {
      expect(priceItem(['Oranges', 0.1234])).toEqual(0.25);
    });
  });
  describe('priceItems', () => {
    it('prices an empty basket at 0', () => {
      expect(priceItems({})).toEqual(0);
    });
    it('prices 1 beans at 0.5', () => {
      expect(priceItems({ Beans: 1 })).toEqual(0.5);
    });
    it('prices 2 beans at 1', () => {
      expect(priceItems({ Beans: 2 })).toEqual(1);
    });
    it('prices 3 beans at 1 (3 for the price of 2)', () => {
      expect(priceItems({ Beans: 3 })).toEqual(1);
    });
    it('prices 1 coke at 0.7', () => {
      expect(priceItems({ Coke: 1 })).toEqual(0.7);
    });
    it('prices 2 cokes at 1 (2 for £1)', () => {
      expect(priceItems({ Coke: 2 })).toEqual(1);
    });
    it('prices 1 oranges at 1.99', () => {
      expect(priceItems({ Oranges: 1 })).toEqual(1.99);
    });
  });
});
