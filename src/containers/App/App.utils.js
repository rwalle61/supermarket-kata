import roundTo from 'round-to';

const itemIncrementSizes = {
  Beans: 1,
  Coke: 1,
  Oranges: 0.2,
};

const strip = (num) => parseFloat(num.toPrecision(12));

const addFloat = (a, b) => strip(a + b);

export const addItemToBasketPure = (basketItems, itemName) => {
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
  const basePricePerUnit = itemPricePerUnit.Beans;
  const numUnitsPerOffer = 3;
  const pricePerOffer = 2 * basePricePerUnit;
  const numOffersSatisfied = Math.floor(quantity / numUnitsPerOffer);
  const remainder = quantity % numUnitsPerOffer;
  const price =
    numOffersSatisfied * pricePerOffer + remainder * basePricePerUnit;
  return price;
};

const getPriceCoke = (quantity) => {
  const basePricePerUnit = itemPricePerUnit.Coke;
  const numUnitsPerOffer = 2;
  const pricePerOffer = 1;
  const numOffersSatisfied = Math.floor(quantity / numUnitsPerOffer);
  const remainder = quantity % numUnitsPerOffer;
  const price =
    numOffersSatisfied * pricePerOffer + remainder * basePricePerUnit;
  return price;
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
