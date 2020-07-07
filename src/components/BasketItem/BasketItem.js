import React from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import css from '../../common.module.css';

const BasketItem = ({
  name,
  quantity,
  addItemToBasket,
  removeItemFromBasket,
}) => (
  <Row>
    <Col className={css.centerVertically}>{`${quantity} ${name}`}</Col>
    <Col className={css.alignEnd}>
      <ButtonGroup>
        <Button onClick={() => removeItemFromBasket(name)}>-</Button>
        <Button onClick={() => addItemToBasket(name)}>+</Button>
      </ButtonGroup>
    </Col>
  </Row>
);

export default BasketItem;
