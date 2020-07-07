import React from 'react';
import BasketItem from '../BasketItem';
import { getTotalPrice } from '../../containers/App/App.utils';

const Basket = ({ items, addItemToBasket, removeItemFromBasket }) => (
  <div>
    <div>Basket</div>
    {Object.entries(items).map(([name, quantity]) => (
      <BasketItem
        key={name}
        name={name}
        quantity={quantity}
        addItemToBasket={addItemToBasket}
        removeItemFromBasket={removeItemFromBasket}
      />
    ))}
    <div>
      Total:
      <b>{`£${getTotalPrice(items)}`}</b>
    </div>
  </div>
);

export default Basket;
