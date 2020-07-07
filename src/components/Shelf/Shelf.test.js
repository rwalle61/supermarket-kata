import React from 'react';
import { render, screen } from '@testing-library/react';
import Shelf from './Shelf';

describe('Shelf', () => {
  it('renders a title', () => {
    render(<Shelf />);
    expect(screen.getByText('Supermarket Items')).toBeInTheDocument();
  });
  it('renders the 3 default items', () => {
    render(<Shelf />);
    expect(screen.getByText('Beans')).toBeInTheDocument();
    expect(screen.getByText('Coke')).toBeInTheDocument();
    expect(screen.getByText('Oranges')).toBeInTheDocument();
  });
});
