import React, { useState } from 'react';
import Button from 'react-bootstrap/button';
import { getTotalPrice, getNewBasketItems } from './App.utils';

const availableItems = ['Beans', 'Coke', 'Oranges'];

const Item = ({ name, addItemToBasket }) => (
  <div>
    <div>{name}</div>
    <Button onClick={() => addItemToBasket(name)}>Add to Basket</Button>
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
        <Item key={name} name={name} addItemToBasket={addItemToBasket} />
      ))}
      <div>Basket</div>
      {Object.entries(basketItems).map(([name, quantity]) => (
        <Item key={name} name={`${quantity} ${name}`} />
      ))}
      <div>
        Total:
        <b>{`£${getTotalPrice(basketItems)}`}</b>
      </div>
    </div>
  );
};

export default App;
