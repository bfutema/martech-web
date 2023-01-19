import { MemoryRouter } from 'react-router-dom';

import { act, render, screen } from '@testing-library/react';

import { Logo } from './Logo';

describe('Logo', () => {
  it('should render Nestlé Logo with a svg and a link for Home', async () => {
    await act(() =>
      render(
        <MemoryRouter>
          <Logo />
        </MemoryRouter>,
      ),
    );

    const linkElement = screen.getByTestId('logo-link');

    expect(linkElement).toHaveAttribute('href', '/');

    const logoElement = screen.getByTestId('logo-svg');

    expect(logoElement).toBeInTheDocument();
  });
});
