import roundTo from 'round-to';

const itemIncrementSizes = {
  Beans: 1,
  Coke: 1,
  Oranges: 0.2,
};

const strip = (num) => parseFloat(num.toPrecision(12));

const addFloat = (a, b) => strip(a + b);

export const getNewBasketItems = (basketItems, itemName) => {
  const existingQuantity = Object.prototype.hasOwnProperty.call(
    basketItems,
    itemName,
  )
    ? basketItems[itemName]
    : 0;
  const newBasketItems = {
    ...basketItems,
    [itemName]: addFloat(existingQuantity, itemIncrementSizes[itemName]),
  };
  return newBasketItems;
};

const itemPricePerUnit = {
  Beans: 0.5,
  Coke: 0.7,
  Oranges: 1.99,
};

const getPriceBeans = (quantity) => {
  return itemPricePerUnit.Beans * quantity;
};
const getPriceCoke = (quantity) => {
  return itemPricePerUnit.Coke * quantity;
};
const getPriceOranges = (quantity) => {
  return itemPricePerUnit.Oranges * quantity;
};

const getPrice = {
  Beans: getPriceBeans,
  Coke: getPriceCoke,
  Oranges: getPriceOranges,
};

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
