import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '../../test-utils';
import App from './App';

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
    it('renders a button to add more of the item to the basket', () => {
      render(<App />);
      const shelfItem = screen.getByText('Beans');
      const shelfItemButton = within(shelfItem.parentElement).getByRole(
        'button',
      );
      userEvent.click(shelfItemButton);

      const basketItem = screen.getByText('1 Beans');
      const basketItemIncrementButton = within(basketItem.parentElement)
        .getByText('+')
        .closest('button');
      userEvent.click(basketItemIncrementButton);

      const newBasketItems = screen.getByText('Basket').parentElement;
      const newBasketItem = within(newBasketItems).getByText('2 Beans');
      expect(newBasketItem).toBeInTheDocument();
    });
    it('renders a button to remove an item from the basket', () => {
      render(<App />);
      const shelfItem = screen.getByText('Beans');
      const shelfItemButton = within(shelfItem.parentElement).getByRole(
        'button',
      );
      userEvent.click(shelfItemButton);

      const basketItem = screen.getByText('1 Beans');
      const basketItemDecrementButton = within(basketItem.parentElement)
        .getByText('-')
        .closest('button');
      expect(basketItemDecrementButton).toBeInTheDocument();
    });
  });
  describe('when user adds multiple items to the basket', () => {
    it('renders 2 increments of an item in the basket', () => {
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
    it('renders 2 basket items and updates the price correctly (no discount)', () => {
      render(<App />);
      const shelfItem = screen.getByText('Beans');
      const shelfItemButton = within(shelfItem.parentElement).getByRole(
        'button',
      );

      userEvent.click(shelfItemButton);
      userEvent.click(shelfItemButton);

      const basketItem = screen.getByText('2 Beans');
      expect(basketItem).toBeInTheDocument();
      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.getByText('£1.00')).toBeInTheDocument();
    });
    it('renders 2 basket items and updates the price correctly (with discount)', () => {
      render(<App />);
      const shelfItem = screen.getByText('Coke');
      const shelfItemButton = within(shelfItem.parentElement).getByRole(
        'button',
      );

      userEvent.click(shelfItemButton);
      userEvent.click(shelfItemButton);

      const basketItem = screen.getByText('2 Coke');
      expect(basketItem).toBeInTheDocument();
      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.getByText('£1.00')).toBeInTheDocument();
    });
  });
  describe('when user removes an item from the basket', () => {
    describe('when the basket contains just 1 increment of the item', () => {
      it('removes the item from the basket and updates the basket price', () => {
        render(<App />);
        const shelfItem = screen.getByText('Beans');
        const shelfItemButton = within(shelfItem.parentElement).getByRole(
          'button',
        );
        userEvent.click(shelfItemButton);

        const basketItem = screen.getByText('1 Beans');
        const basketItemDecrementButton = within(basketItem.parentElement)
          .getByText('-')
          .closest('button');
        userEvent.click(basketItemDecrementButton);

        expect(screen.queryByText(/\d+ Beans/)).toBeNull();
        expect(screen.getByText('Total:')).toBeInTheDocument();
        expect(screen.getByText('£0.00')).toBeInTheDocument();
      });
    });
    describe('when the basket contains multiple increments of the item', () => {
      it('keeps the item in the basket, updates the item quantity and basket price', () => {
        render(<App />);
        const shelfItem = screen.getByText('Beans');
        const shelfItemButton = within(shelfItem.parentElement).getByRole(
          'button',
        );
        userEvent.click(shelfItemButton);
        userEvent.click(shelfItemButton);

        const basketItem = screen.getByText('2 Beans');
        const basketItemDecrementButton = within(basketItem.parentElement)
          .getByText('-')
          .closest('button');
        userEvent.click(basketItemDecrementButton);

        expect(screen.getByText('1 Beans')).toBeInTheDocument();
        expect(screen.getByText('Total:')).toBeInTheDocument();
        expect(screen.getByText('£0.50')).toBeInTheDocument();
      });
    });
  });
});
