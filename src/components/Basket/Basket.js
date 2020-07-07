import React from 'react';
import BasketItem from '../BasketItem';
import { getTotalPrice } from '../../containers/App/App.utils';

const Basket = ({ items }) => (
  <div>
    <div>Basket</div>
    {Object.entries(items).map(([name, quantity]) => (
      <BasketItem key={name} name={name} quantity={quantity} />
    ))}
    <div>
      Total:
      <b>{`£${getTotalPrice(items)}`}</b>
    </div>
  </div>
);

export default Basket;
