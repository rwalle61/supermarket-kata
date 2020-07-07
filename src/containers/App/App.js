import React, { useState } from 'react';
import Button from 'react-bootstrap/button';
import { getTotalPrice, addItemToBasketPure } from './App.utils';

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
    <Button onClick={() => { }}>-</Button>
  </div>
);

const App = () => {
  const [basketItems, setBasketItems] = useState({});

  const addItemToThisBasket = (name) => {
    setBasketItems(addItemToBasketPure(basketItems, name));
  };

  return (
    <div>
      <div>Supermarket Items</div>
      {availableItems.map((name) => (
        <ShelfItem
          key={name}
          name={name}
          addItemToBasket={addItemToThisBasket}
        />
      ))}
      <div>Basket</div>
      {Object.entries(basketItems).map(([name, quantity]) => (
        <BasketItem
          key={name}
          name={name}
          quantity={quantity}
          addItemToBasket={addItemToThisBasket}
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
