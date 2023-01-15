import { css } from 'styled-components';

export const handleOpen = (isOpen: boolean) => css`
  opacity: ${isOpen ? 1 : 0} !important;
  visibility: ${isOpen ? 'visible' : 'hidden'};
  pointer-events: ${isOpen ? 'initial' : 'none'};

  * {
    opacity: ${isOpen ? 1 : 0} !important;
    visibility: ${isOpen ? 'visible' : 'hidden'};
    pointer-events: ${isOpen ? 'initial' : 'none'};
  }
`;
