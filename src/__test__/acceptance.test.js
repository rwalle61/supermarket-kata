import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '../test-utils';
import App from '../containers/App';

describe('Acceptance tests', () => {
  beforeEach(() => {
    render(<App />);
  });
  describe('As a user', () => {
    test('I can recreate the example receipt (with correct items, quantities and basket price)', () => {
      ['Beans', 'Beans', 'Beans', 'Coke', 'Coke', 'Oranges'].forEach((item) => {
        const shelfItem = screen.getByText(item);
        const shelfItemButton = within(shelfItem.parentElement).getByRole(
          'button',
        );
        userEvent.click(shelfItemButton);
      });

      expect(screen.getByText('3 Beans')).toBeInTheDocument();
      expect(screen.getByText('2 Coke')).toBeInTheDocument();
      expect(screen.getByText('0.2kg Oranges')).toBeInTheDocument();
      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.getByText('£2.40')).toBeInTheDocument();
    });
    test('I can recreate the example receipt, then remove items (such that I no longer qualify for the group discounts)', () => {
      ['Beans', 'Beans', 'Beans', 'Coke', 'Coke', 'Oranges'].forEach((item) => {
        const shelfItem = screen.getByText(item);
        const shelfItemButton = within(shelfItem.parentElement).getByRole(
          'button',
        );
        userEvent.click(shelfItemButton);
      });

      ['Beans', 'Coke'].forEach((item) => {
        const basketItem = screen.getByText(new RegExp(`\\d+ ${item}`));
        const basketItemDecrementButton = within(basketItem.parentElement)
          .getByText('-')
          .closest('button');
        userEvent.click(basketItemDecrementButton);
      });

      expect(screen.getByText('2 Beans')).toBeInTheDocument();
      expect(screen.getByText('1 Coke')).toBeInTheDocument();
      expect(screen.getByText('0.2kg Oranges')).toBeInTheDocument();
      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.getByText('£2.10')).toBeInTheDocument();
    });
  });
});
