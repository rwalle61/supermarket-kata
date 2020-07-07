import { ADD_ITEM_TO_BASKET, REMOVE_ITEM_FROM_BASKET } from '../actions';
import { itemIncrementSizes, availableItems } from '../data';

const strip = (num) => parseFloat(num.toPrecision(12));

const addFloat = (a, b) => strip(a + b);

export const addItemToBasket = (basket, itemName) => {
  if (!availableItems.includes(itemName)) {
    return basket;
  }
  const existingQuantity = Object.keys(basket).includes(itemName)
    ? basket[itemName]
    : 0;
  const increment = itemIncrementSizes[itemName];
  const newQuantity = addFloat(existingQuantity, increment);
  const newBasket = {
    ...basket,
    [itemName]: newQuantity,
  };
  return newBasket;
};

export const removeItemFromBasket = (basket, itemName) => {
  if (!availableItems.includes(itemName)) {
    return basket;
  }
  const existingQuantity = basket[itemName];
  const decrement = itemIncrementSizes[itemName];
  const newQuantity = addFloat(existingQuantity, -decrement);
  const { [itemName]: item, ...rest } = basket;
  const newBasket =
    newQuantity > 0
      ? {
          ...basket,
          [itemName]: newQuantity,
        }
      : rest;
  return newBasket;
};

const items = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_BASKET:
      return addItemToBasket(state, action.name);
    case REMOVE_ITEM_FROM_BASKET:
      return removeItemFromBasket(state, action.name);
    default:
      return state;
  }
};

export default items;
