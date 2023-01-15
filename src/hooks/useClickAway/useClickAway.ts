/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

function useClickAway(
  ref: any,
  handler: (event: Event | MouseEvent) => void,
  options: { enabled: boolean },
) {
  const { enabled } = options;

  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (!enabled) return;

    function internalHandler(e: Event): void {
      return handlerRef.current(e);
    }

    document.addEventListener('pointerdown', internalHandler);

    return () => {
      document.removeEventListener('pointerdown', internalHandler);
    };
  }, [ref, enabled]);
}

export { useClickAway };
