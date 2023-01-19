import { transparentize } from 'polished';
import styled from 'styled-components';

import { Theme } from '@styles/theme';

export const Container = styled.button`
  width: 44px;
  height: 44px;

  border: none;
  border-radius: ${Theme.radii['radius-circular']};
  background: transparent;

  padding: ${Theme.space['spacing-xxs']};

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s;

  &:hover {
    background: ${transparentize(0.9, Theme.colors['color-neutral-gray-40'])};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
