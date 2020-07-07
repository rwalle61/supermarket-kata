import React, { useState } from 'react';
import { addItemToBasketPure, removeItemFromBasketPure } from './App.utils';
import Shelf from '../../components/Shelf';
import Basket from '../../components/Basket';

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
      <Shelf addItemToBasket={addItemToThisBasket} />
      <Basket
        items={basketItems}
        addItemToBasket={addItemToThisBasket}
        removeItemFromBasket={removeItemFromThisBasket}
      />
    </div>
  );
};

export default App;
