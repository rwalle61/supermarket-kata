import * as actions from '.';

describe('actions', () => {
  it('addItemToBasket should create ADD_ITEM_TO_BASKET action', () => {
    expect(actions.addItemToBasket('item1')).toEqual({
      type: 'ADD_ITEM_TO_BASKET',
      name: 'item1',
    });
  });
  it('removeItemFromBasket should create REMOVE_ITEM_FROM_BASKET action', () => {
    expect(actions.removeItemFromBasket('item1')).toEqual({
      type: 'REMOVE_ITEM_FROM_BASKET',
      name: 'item1',
    });
  });
});
