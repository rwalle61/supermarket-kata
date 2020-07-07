import React from 'react';
import Container from 'react-bootstrap/Container';
import Shelf from '../../components/Shelf';
import Basket from '../../components/Basket';

const App = () => {
  return (
    <Container>
      <Shelf />
      <Basket />
    </Container>
  );
};

export default App;
