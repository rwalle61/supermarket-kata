import React from 'react';
import Button from 'react-bootstrap/Button';

const ShelfItem = ({ name, addItemToBasket }) => (
  <div>
    <div>{name}</div>
    <Button onClick={() => addItemToBasket(name)}>Add to Basket</Button>
  </div>
);

export default ShelfItem;
