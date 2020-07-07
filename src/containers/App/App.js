import React, { useState } from 'react';
import {
  getTotalPrice,
  addItemToBasketPure,
  removeItemFromBasketPure,
} from './App.utils';
import BasketItem from '../../components/BasketItem';
import ShelfItem from '../../components/ShelfItem';

const availableItems = ['Beans', 'Coke', 'Oranges'];

const App = () => {
  const [basketItems, setBasketItems] = useState({});

  const addItemToThisBasket = (name) => {
    setBasketItems(addItemToBasketPure(basketItems, name));
  };
  const removeItemFromThisBasket = (name) => {
    setBasketItems(removeItemFromBasketPure(basketItems, name));
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
          removeItemFromBasket={removeItemFromThisBasket}
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
