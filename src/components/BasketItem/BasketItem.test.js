import React from 'react';
import { render, screen } from '@testing-library/react';
import BasketItem from './BasketItem';

describe('BasketItem', () => {
  it('renders the item name', () => {
    render(
      <BasketItem
        name='Beans'
        addItemToBasket={() => {}}
        removeItemFromBasket={() => {}}
      />,
    );
    expect(screen.getByText(/Beans/)).toBeInTheDocument();
  });
  it('renders the item quantity', () => {
    render(
      <BasketItem
        name='Beans'
        quantity={3}
        addItemToBasket={() => {}}
        removeItemFromBasket={() => {}}
      />,
    );
    expect(screen.getByText('3 Beans')).toBeInTheDocument();
  });
  it('renders an "Add" button', () => {
    render(
      <BasketItem
        name='Beans'
        addItemToBasket={() => {}}
        removeItemFromBasket={() => {}}
      />,
    );
    expect(screen.getByText('+').closest('button')).toBeInTheDocument();
  });
  it('renders a "Remove" button', () => {
    render(
      <BasketItem
        name='Beans'
        addItemToBasket={() => {}}
        removeItemFromBasket={() => {}}
      />,
    );
    expect(screen.getByText('-').closest('button')).toBeInTheDocument();
  });
});
