import styled, { css } from 'styled-components';

import { ArrowDown } from '@assets/icons';
import { Theme } from '@styles/theme';

const containerVariations = {
  errored: css`
    border-color: ${Theme.colors['color-error-darker-60']};

    transition: none;

    &:hover {
      border-color: ${Theme.colors['color-neutral-gray-70']};
    }
  `,
  focused: css`
    border-color: ${Theme.colors['color-primary-darker-40']};
  `,
  disabled: css`
    border-color: ${Theme.colors['color-neutral-gray-70']};
  `,
};

interface ContainerProps {
  focused: number;
  isErrored: boolean;
  disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  border: 1px solid ${Theme.colors['color-neutral-gray-40']};
  border-radius: 8px;

  position: relative;

  padding-left: 12px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  user-select: none;
  cursor: pointer;

  transition: all 0.1s;

  input {
    background: transparent;
    width: 100%;
    border-radius: 8px;
    height: 100%;

    border: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    outline: none;

    font-weight: 500;

    padding: 12px 4px;

    flex: 1;

    cursor: pointer;
  }

  ${({ disabled }) => disabled && containerVariations.disabled}
  ${({ isErrored }) => isErrored && containerVariations.errored}
  ${({ focused }) => focused && containerVariations.focused}
`;

export const Label = styled.label`
  background: ${Theme.colors['color-neutral-white']};

  color: ${Theme.colors['color-neutral-gray']};
  font-weight: ${Theme.fontWeights['font-weight-medium']};
  font-size: ${Theme.fontSizes['font-size-xxs']};
  white-space: nowrap;

  padding: 0 4px;

  position: absolute;
  top: -10px;
  left: 8px;

  span {
    color: ${Theme.colors['color-error-darker-60']};
    font-weight: ${Theme.fontWeights['font-weight-bold']};
    font-size: 18px;
    line-height: 14px;
    white-space: nowrap;

    &:after {
      content: '*';
    }
  }
`;

export const Icon = styled(ArrowDown)<Pick<ContainerProps, 'focused'>>`
  margin: 0 8px;

  transform: ${({ focused }) => (focused ? 'rotate(180deg)' : 'rotate(0deg)')};

  transition: all 0.1s;
`;

export const ErrorMessage = styled.span`
  color: ${Theme.colors['color-error-darker-60']};
  font-weight: ${Theme.fontWeights['font-weight-bold']};
  font-size: ${Theme.fontSizes['font-size-xxxs']};
  line-height: ${Theme.lineHeights.base};
  white-space: nowrap;
  letter-spacing: 0.4px;

  position: absolute;
  bottom: -18px;
  left: 0;
`;
