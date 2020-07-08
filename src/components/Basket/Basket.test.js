import React from 'react';
import { render, screen } from '../../test-utils';
import Basket from './Basket';

describe('Basket', () => {
  it('renders a title', () => {
    render(<Basket items={{}} />);
    expect(screen.getByText('Basket')).toBeInTheDocument();
  });
  it('renders some items', () => {
    render(<Basket items={{ Beans: 1, Coke: 1 }} />);
    expect(screen.getByText('1 Beans')).toBeInTheDocument();
    expect(screen.getByText('1 Coke')).toBeInTheDocument();
  });
  it('renders the default basket price to 2DP', () => {
    render(<Basket items={{}} />);
    // expect(screen.getByText(/Total:/)).toBeInTheDocument();
    expect(screen.getByText('Total:')).toBeInTheDocument();
    expect(screen.getByText('£0.00')).toBeInTheDocument();
  });
});
