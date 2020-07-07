import React from 'react';
import ShelfItem from '../ShelfItem';

const availableItems = ['Beans', 'Coke', 'Oranges'];

const Shelf = ({ addItemToBasket }) => (
  <div>
    <div>Supermarket Items</div>
    {availableItems.map((name) => (
      <ShelfItem key={name} name={name} addItemToBasket={addItemToBasket} />
    ))}
  </div>
);

export default Shelf;
