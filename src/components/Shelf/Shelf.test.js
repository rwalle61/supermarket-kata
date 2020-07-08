import React from 'react';
import { render, screen } from '../../test-utils';
import Shelf from './Shelf';

describe('Shelf', () => {
  beforeEach(() => {
    render(<Shelf />);
  });
  it('renders a title', () => {
    expect(screen.getByText('Supermarket Items')).toBeInTheDocument();
  });
  it('renders the 3 default items', () => {
    expect(screen.getByText('Beans')).toBeInTheDocument();
    expect(screen.getByText('Coke')).toBeInTheDocument();
    expect(screen.getByText('Oranges')).toBeInTheDocument();
  });
});
