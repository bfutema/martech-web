import { act, render, screen } from '@testing-library/react';

import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('should render IconButton initial state', async () => {
    await act(() => render(<IconButton icon="Menu" />));

    const iconButton = screen.getByTestId('icon-button-container');

    expect(iconButton).toBeInTheDocument();
  });
});
