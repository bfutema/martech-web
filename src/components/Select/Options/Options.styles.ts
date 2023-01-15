import styled from 'styled-components';

import { handleOpen } from '@styles/common/handleOpen.styles';
import { Theme } from '@styles/theme';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.ul<ContainerProps>`
  width: 100%;

  border: 1px solid ${Theme.colors['color-neutral-gray-40']};
  border-radius: 8px;
  box-shadow: ${Theme.shadows['shadow-level-1']};
  background: ${Theme.colors['color-neutral-white']};

  position: absolute;
  left: 0;
  top: calc(100% + 8px);

  display: flex;
  flex-direction: column;

  transition: all 0.1s;

  z-index: 10;

  ${({ isOpen }) => handleOpen(isOpen)}
`;

export const Item = styled.li`
  background: ${Theme.colors['color-neutral-white']};

  font-size: ${Theme.fontSizes['font-size-xs']};

  list-style: none;

  padding: ${Theme.space['spacing-xxs']};

  cursor: pointer;

  transition: 0.2s;

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;
