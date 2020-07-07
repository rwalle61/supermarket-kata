import React from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getUnit } from '../../data';
import css from '../../common.module.css';

const BasketItem = ({
  name,
  quantity,
  addItemToBasket,
  removeItemFromBasket,
}) => (
  <Row>
    <Col className={css.centerVertically}>
      {`${quantity}${getUnit(name)} ${name}`}
    </Col>
    <Col className={css.alignEnd}>
      <ButtonGroup>
        <Button onClick={() => removeItemFromBasket(name)}>-</Button>
        <Button onClick={() => addItemToBasket(name)}>+</Button>
      </ButtonGroup>
    </Col>
  </Row>
);

BasketItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  addItemToBasket: PropTypes.func.isRequired,
  removeItemFromBasket: PropTypes.func.isRequired,
};

BasketItem.defaultProps = {
  quantity: 0,
};

export default BasketItem;
