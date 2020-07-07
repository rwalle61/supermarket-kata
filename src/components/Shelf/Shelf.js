import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ShelfItem from '../ShelfItem';
import { availableItems } from '../../data';
import css from '../../common.module.css';

const Shelf = () => (
  <div className='mt-4'>
    <h2 className='text-center'>Supermarket Items</h2>
    <ListGroup variant='flush'>
      {availableItems.map((name) => (
        <ListGroup.Item key={name} className={css.narrow}>
          <ShelfItem name={name} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>
);

export default Shelf;
