import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from './src/Grid'


describe('AG Grid Tests', () => {
  it('should have 5 columns', async () => {
    render(<Grid />);
    const headerCells = await screen.findAllByRole('columnheader');
    expect(headerCells).toHaveLength(5);
  });

  it('should contain specific value in the header', async () => {
    render(<Grid />);
    const headerCell = await screen.findByText('Nome');
    expect(headerCell).toBeInTheDocument();
  });

  it('should be populated with 10 rows and 5 columns', async () => {
    render(<Grid />);
    const rowCells = await screen.findAllByRole('row');
    expect(rowCells).toHaveLength(11); 
  });
});
