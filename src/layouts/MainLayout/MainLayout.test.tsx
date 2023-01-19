import { render, screen } from '@testing-library/react';

import { MainLayout } from './MainLayout';

describe('MainLayout', () => {
  it('should render the MainLayout page initial state', async () => {
    render(<MainLayout />);

    const container = screen.getByTestId('main-layout-container');

    expect(container).toBeInTheDocument();
  });
});
