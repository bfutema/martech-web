import styled, { css } from 'styled-components';

import { Theme } from '@styles/theme';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  disabled?: boolean;
}

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

export const Container = styled.div<ContainerProps>`
  border: 1px solid ${Theme.colors['color-neutral-gray-40']};
  border-radius: 8px;

  padding-left: 12px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  user-select: none;
  cursor: pointer;

  transition: all 0.1s;

  input {
    height: 100%;

    border: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    outline: none;

    font-weight: ${Theme.fontWeights['font-weight-medium']};

    padding: 12px 4px;

    flex: 1;

    cursor: pointer;
  }

  ${({ isFocused }) => isFocused && containerVariations.focused}
  ${({ disabled }) => disabled && containerVariations.disabled}
  ${({ isErrored }) => isErrored && containerVariations.errored}
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
