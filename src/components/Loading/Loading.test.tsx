import { act, render, screen } from '@testing-library/react';

import { Loading } from './Loading';

describe('Loading', () => {
  it('should render the Loading component', async () => {
    await act(() => render(<Loading />));

    const loading = screen.getByTestId('loading-container');

    expect(loading).toBeInTheDocument();
  });
});
