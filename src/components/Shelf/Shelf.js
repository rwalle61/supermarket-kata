import React from 'react';
import ShelfItem from '../ShelfItem';
import { availableItems } from '../../data';

const Shelf = () => (
  <div>
    <div>Supermarket Items</div>
    {availableItems.map((name) => (
      <ShelfItem key={name} name={name} />
    ))}
  </div>
);

export default Shelf;
