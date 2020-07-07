import { priceItems, priceItem } from './App.utils';

describe('App.utils', () => {
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
