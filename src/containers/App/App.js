import React from 'react';
import Button from 'react-bootstrap/button';

const Item = ({ name }) => (
  <div>
    <div>{name}</div>
    <Button>Add to Basket</Button>
  </div>
);

const App = () => (
  <div>
    <div>Supermarket Items</div>
    <Item name='Beans' />
    <Item name='Coke' />
    <Item name='Oranges' />
    <div>Basket</div>
    <div>
      Total:
      <b>£0.00</b>
    </div>
  </div>
);

export default App;
