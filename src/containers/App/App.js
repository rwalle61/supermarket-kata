import React, { useState } from 'react';
import Button from 'react-bootstrap/button';
import { getTotalPrice, getNewBasketItems } from './App.utils';

const availableItems = ['Beans', 'Coke', 'Oranges'];

const ShelfItem = ({ name, addItemToBasket }) => (
  <div>
    <div>{name}</div>
    <Button onClick={() => addItemToBasket(name)}>Add to Basket</Button>
  </div>
);

const BasketItem = ({ name, quantity, addItemToBasket }) => (
  <div>
    <div>{`${quantity} ${name}`}</div>
    <Button onClick={() => addItemToBasket(name)}>+</Button>
    <Button onClick={() => {}}>-</Button>
  </div>
);

const App = () => {
  const [basketItems, setBasketItems] = useState({});

  const addItemToBasket = (name) => {
    setBasketItems(getNewBasketItems(basketItems, name));
  };

  return (
    <div>
      <div>Supermarket Items</div>
      {availableItems.map((name) => (
        <ShelfItem key={name} name={name} addItemToBasket={addItemToBasket} />
      ))}
      <div>Basket</div>
      {Object.entries(basketItems).map(([name, quantity]) => (
        <BasketItem
          key={name}
          name={name}
          quantity={quantity}
          addItemToBasket={addItemToBasket}
        />
      ))}
      <div>
        Total:
        <b>{`£${getTotalPrice(basketItems)}`}</b>
      </div>
    </div>
  );
};

export default App;
