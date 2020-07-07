import { getNewBasketItems } from './App.utils';

describe('App.utils', () => {
  describe('getNewBasketItems', () => {
    it('adds the item to the basket', () => {
      expect(getNewBasketItems({}, 'Beans')).toEqual({
        Beans: 1,
      });
    });
    it('increments the existing beans', () => {
      expect(
        getNewBasketItems(
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
        getNewBasketItems(
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
        getNewBasketItems(
          {
            Oranges: 0.2,
          },
          'Oranges',
        ),
      ).toEqual({
        Oranges: 0.4,
      });
    });
  });
});
