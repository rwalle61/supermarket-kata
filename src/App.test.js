import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  describe('when app starts', () => {
    it('renders the title for items available in the supermarket', () => {
      render(<App />);
      expect(screen.getByText('Supermarket Items')).toBeInTheDocument();
    });
    it('renders the 3 default items in the supermarket', () => {
      render(<App />);
      ['Beans', 'Coke', 'Oranges'].forEach((itemName) => {
        expect(screen.getByText(itemName)).toBeInTheDocument();
      });
    });
    it('renders the "Basket" title', () => {
      render(<App />);
      expect(screen.getByText('Basket')).toBeInTheDocument();
    });
    it('renders the default basket price (£0.00)', () => {
      render(<App />);
      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.getByText(/£0.00/)).toBeInTheDocument();
    });
  });
});
