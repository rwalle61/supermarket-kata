import React from 'react';
import Button from 'react-bootstrap/Button';

const BasketItem = ({
  name,
  quantity,
  addItemToBasket,
  removeItemFromBasket,
}) => (
  <div>
    <div>{`${quantity} ${name}`}</div>
    <Button onClick={() => addItemToBasket(name)}>+</Button>
    <Button onClick={() => removeItemFromBasket(name)}>-</Button>
  </div>
);

export default BasketItem;
