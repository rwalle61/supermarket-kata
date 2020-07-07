import roundTo from 'round-to';
import { getPrice } from '../../data';

export const priceItem = ([name, quantity]) => {
  const price = getPrice[name](quantity);
  return roundTo(price, 2);
};

export const priceItems = (items) =>
  Object.entries(items).reduce(
    (subtotal, item) => subtotal + priceItem(item),
    0,
  );

export const getTotalPrice = (items) => priceItems(items).toFixed(2);
