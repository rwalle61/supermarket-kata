import React, { useState } from 'react';
import Button from 'react-bootstrap/button';

const availableItems = ['Beans', 'Coke', 'Oranges'];

const Item = ({ name, addItemToBasket }) => (
  <div>
    <div>{name}</div>
    <Button onClick={() => addItemToBasket(name)}>Add to Basket</Button>
  </div>
);

const App = () => {
  const [basketItems, setBasketItems] = useState([]);

  const addItemToBasket = (name) => {
    setBasketItems(basketItems.concat([name]));
  };
  return (
    <div>
      <div>Supermarket Items</div>
      {availableItems.map((name) => (
        <Item key={name} name={name} addItemToBasket={addItemToBasket} />
      ))}
      <div>Basket</div>
      {basketItems.map((name) => (
        <Item key={name} name={`${name === 'Oranges' ? 0.2 : 1} ${name}`} />
      ))}
      <div>
        Total:
        <b>£0.00</b>
      </div>
    </div>
  );
};

export default App;
