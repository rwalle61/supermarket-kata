import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import css from '../../common.module.css';

const ShelfItem = ({ name, addItemToBasket }) => (
  <Row>
    <Col className={css.centerVertically}>{name}</Col>
    <Col className={css.alignEnd}>
      <Button onClick={() => addItemToBasket(name)}>Add to Basket</Button>
    </Col>
  </Row>
);

ShelfItem.propTypes = {
  name: PropTypes.string.isRequired,
  addItemToBasket: PropTypes.func.isRequired,
};

export default ShelfItem;
