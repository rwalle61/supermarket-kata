import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import BasketItem from '../BasketItem';
import { getTotalPrice } from './Basket.utils';
import css from '../../common.module.css';

const Basket = ({ items }) => (
  <div className='mt-4'>
    <h2 className='text-center'>Basket</h2>
    <ListGroup variant='flush'>
      {Object.entries(items).map(([name, quantity]) => (
        <ListGroup.Item key={name} className={css.narrow}>
          <BasketItem name={name} quantity={quantity} />
        </ListGroup.Item>
      ))}
    </ListGroup>
    <h6 className='text-center'>
      Total:
      <b>{`£${getTotalPrice(items)}`}</b>
    </h6>
  </div>
);

Basket.propTypes = {
  items: PropTypes.object.isRequired,
};

export default Basket;
