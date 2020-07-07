import roundTo from 'round-to';

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
