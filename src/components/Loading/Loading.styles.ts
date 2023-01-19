import styled, { css } from 'styled-components';

import { Theme } from '@styles/theme';

import { Size } from './Loading';

interface ContainerProps {
  size: Size;
}

const variants = {
  size: {
    sm: css`
      width: 50px;
      height: 50px;
    `,
    md: css`
      width: 80px;
      height: 80px;
    `,
    lg: css`
      width: 100px;
      height: 100px;

      svg circle {
        stroke-width: 5%;
      }
    `,
  },
};

const animations = css`
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate-stroke {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke: ${Theme.colors['color-secondary-darker-60']};
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
      stroke: ${Theme.colors['color-secondary-darker-60']};
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
      stroke: ${Theme.colors['color-secondary-darker-60']};
    }
  }
`;

export const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;

  svg {
    animation: rotate 2s linear infinite;

    circle {
      fill: none;
      stroke: green;
      stroke-width: 3px;
      stroke-linecap: round;

      animation: animate-stroke 1.5s ease-in-out infinite;
    }
  }

  ${({ size }) => variants.size[size]}
  ${animations}
`;
