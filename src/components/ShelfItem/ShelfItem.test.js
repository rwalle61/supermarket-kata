import React from 'react';
import { render, screen } from '@testing-library/react';
import ShelfItem from './ShelfItem';

describe('ShelfItem', () => {
  it('renders the item name', () => {
    render(
      <ShelfItem
        name='Beans'
        addItemToBasket={() => {}}
        removeItemFromBasket={() => {}}
      />,
    );
    expect(screen.getByText(/Beans/)).toBeInTheDocument();
  });
  it('renders an "Add to Basket" button', () => {
    render(
      <ShelfItem
        name='Beans'
        addItemToBasket={() => {}}
        removeItemFromBasket={() => {}}
      />,
    );
    expect(
      screen.getByText('Add to Basket').closest('button'),
    ).toBeInTheDocument();
  });
});
