import { renderHook } from '@testing-library/react';

import { useClickAway } from './useClickAway';

describe('useClickAway', () => {
  it('should be able to use useClickAway', () => {
    renderHook(() => useClickAway(jest.fn(), jest.fn(), { enabled: true }));
  });
});
