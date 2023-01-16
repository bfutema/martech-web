import { useRef } from 'react';

import { fireEvent, render, renderHook, screen } from '@testing-library/react';

import { useClickAway } from './useClickAway';

function Component() {
  const ref = useRef(null);

  useClickAway(ref, jest.fn(), { enabled: true });

  return (
    <div ref={ref}>
      <span>useClickAway</span>
    </div>
  );
}

describe('useClickAway', () => {
  it('should be able to use hook useClickAway', () => {
    renderHook(() => useClickAway(useRef(null), jest.fn(), { enabled: true }));

    render(
      <div data-testid="outside">
        <Component />
      </div>,
    );

    const outside = screen.getByTestId('outside');

    fireEvent.pointerDown(outside);
  });
});
