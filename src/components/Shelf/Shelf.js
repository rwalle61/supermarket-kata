import React from 'react';
import ShelfItem from '../ShelfItem';

const availableItems = ['Beans', 'Coke', 'Oranges'];

const Shelf = () => (
  <div>
    <div>Supermarket Items</div>
    {availableItems.map((name) => (
      <ShelfItem key={name} name={name} />
    ))}
  </div>
);

export default Shelf;
