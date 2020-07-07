import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  describe('when app starts', () => {
    it('renders the title for items available in the supermarket', () => {
      render(<App />);
      expect(screen.getByText('Supermarket Items')).toBeInTheDocument();
    });
  });
});
