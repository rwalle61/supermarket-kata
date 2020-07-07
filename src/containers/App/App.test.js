import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { getNewBasketItems } from './App';

describe('Utils', () => {
  describe('getNewBasketItems', () => {
    it('adds the item to the basket', () => {
      expect(getNewBasketItems({}, 'Beans')).toEqual({
        Beans: 1,
      });
    });
    it('increments the existing beans', () => {
      expect(
        getNewBasketItems(
          {
            Beans: 1,
          },
          'Beans',
        ),
      ).toEqual({
        Beans: 2,
      });
    });
  });
});

describe('App', () => {
  describe('when app starts', () => {
    it('renders the title for items available in the supermarket', () => {
      render(<App />);
      expect(screen.getByText('Supermarket Items')).toBeInTheDocument();
    });
    it('renders the 3 default items in the supermarket with buttons to add them to basket', () => {
      render(<App />);
      ['Beans', 'Coke', 'Oranges'].forEach((itemName) => {
        const shelfItem = screen.getByText(itemName);
        expect(shelfItem).toBeInTheDocument();
        const button = within(shelfItem.parentElement).getByRole('button');
        expect(button).toHaveTextContent('Add to Basket');
      });
    });
    it('renders the "Basket" title', () => {
      render(<App />);
      expect(screen.getByText('Basket')).toBeInTheDocument();
    });
    it('renders the default basket price (£0.00)', () => {
      render(<App />);
      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.getByText('£0.00')).toBeInTheDocument();
    });
  });
  describe('when user adds an item from shelf to the basket', () => {
    it('renders that item in the basket', () => {
      render(<App />);
      const shelfItem = screen.getByText('Beans');
      const shelfItemButton = within(shelfItem.parentElement).getByRole(
        'button',
      );

      userEvent.click(shelfItemButton);

      const basketItem = screen.getByText('1 Beans');
      expect(basketItem).toBeInTheDocument();
    });
    it('renders a different item in the basket (with a different quantity)', () => {
      render(<App />);
      const shelfItem = screen.getByText('Oranges');
      const shelfItemButton = within(shelfItem.parentElement).getByRole(
        'button',
      );

      userEvent.click(shelfItemButton);

      const basketItem = screen.getByText('0.2 Oranges');
      expect(basketItem).toBeInTheDocument();
    });
    it('updates the basket price', () => {
      render(<App />);
      const shelfItem = screen.getByText('Beans');
      const shelfItemButton = within(shelfItem.parentElement).getByRole(
        'button',
      );

      userEvent.click(shelfItemButton);

      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.getByText('£0.50')).toBeInTheDocument();
    });
    it('updates the basket price (for a different item)', () => {
      render(<App />);
      const shelfItem = screen.getByText('Oranges');
      const shelfItemButton = within(shelfItem.parentElement).getByRole(
        'button',
      );

      userEvent.click(shelfItemButton);

      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.getByText('£0.40')).toBeInTheDocument();
    });
  });
  describe('when user adds 2 of an item from shelf to the basket', () => {
    it('renders 2 increments of that item in the basket', () => {
      render(<App />);
      const shelfItem = screen.getByText('Beans');
      const shelfItemButton = within(shelfItem.parentElement).getByRole(
        'button',
      );

      userEvent.click(shelfItemButton);
      userEvent.click(shelfItemButton);

      const basketItem = screen.getByText('2 Beans');
      expect(basketItem).toBeInTheDocument();
    });
  });
});
