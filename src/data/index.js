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

export const getPrice = {
  Beans: getPriceBeans,
  Coke: getPriceCoke,
  Oranges: getPriceOranges,
};

export const itemIncrementSizes = {
  Beans: 1,
  Coke: 1,
  Oranges: 0.2,
};

export const availableItems = Object.keys(itemIncrementSizes);

export const getUnit = (itemName) => {
  if (itemName === 'Oranges') {
    return 'kg';
  }
  return '';
};
