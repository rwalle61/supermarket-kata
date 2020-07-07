const itemIncrementSizes = {
  Beans: 1,
  Coke: 1,
  Oranges: 0.2,
};

const strip = (num) => parseFloat(num.toPrecision(12));

const addFloat = (a, b) => strip(a + b);

// eslint-disable-next-line import/prefer-default-export
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
  Oranges: 1.99,
};

const priceItem = ([name, quantity]) => {
  return itemPricePerUnit[name] * quantity;
};

const priceItems = (items) =>
  Object.entries(items).reduce(
    (subtotal, item) => subtotal + priceItem(item),
    0,
  );

export const getTotalPrice = (items) => priceItems(items).toFixed(2);
