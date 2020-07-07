export const ADD_ITEM_TO_BASKET = 'ADD_ITEM_TO_BASKET';
export const REMOVE_ITEM_FROM_BASKET = 'REMOVE_ITEM_FROM_BASKET';

export const addItemToBasket = (name) => ({
  type: ADD_ITEM_TO_BASKET,
  name,
});

export const removeItemFromBasket = (name) => ({
  type: REMOVE_ITEM_FROM_BASKET,
  name,
});
