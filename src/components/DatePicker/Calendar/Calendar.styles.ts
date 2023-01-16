import styled from 'styled-components';

import { handleOpen } from '@styles/common';
import { Theme } from '@styles/theme';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 280px;

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

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    height: 24px;

    border: none;
    border-radius: 4px;
    background: none;

    color: ${Theme.colors['color-neutral-black']};
    font-weight: ${Theme.fontWeights['font-weight-bold']};
    text-transform: capitalize;

    margin: 0;
    padding: 0;

    cursor: pointer;

    display: flex;
    align-items: center;

    transition: all 0.1s;

    &:hover {
      color: ${Theme.colors['color-primary-darker-40']};
    }
  }

  div {
    gap: 4px;
    display: flex;
  }
`;

export const Header = styled.div`
  margin: 4px -4px 0px -4px;

  gap: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(7, 1fr);

  span {
    font-size: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child,
    &:last-child {
      color: ${Theme.colors['color-error-darker-60']};
    }
  }
`;

export const Days = styled.div`
  gap: 4px;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(7, 1fr);
`;

interface DayProps {
  isOpen: boolean;
  isToday: boolean;
  isSelected: boolean;
  isHoliday: boolean;
}

export const Day = styled.button<DayProps>`
  width: 32px;
  height: 32px;

  border: 1px solid transparent;
  border-radius: ${Theme.radii['radius-sm']};
  background: ${({ isSelected }) =>
    isSelected ? Theme.colors['color-primary-darker-60'] : 'transparent'};

  color: ${({ isToday, isSelected }) =>
    isToday && !isSelected
      ? Theme.colors['color-primary-darker-60']
      : isSelected
      ? Theme.colors['color-neutral-white']
      : Theme.colors['color-neutral-gray-40']};
  font-size: ${Theme.fontSizes['font-size-xxs']};
  font-weight: ${({ isSelected }) =>
    isSelected
      ? Theme.fontWeights['font-weight-bold']
      : Theme.fontWeights['font-weight-medium']};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: ${({ isOpen }) => (isOpen ? 'pointer' : 'none')};

  transition: all 0.1s;

  ${({ isOpen }) => handleOpen(isOpen)}

  &:hover {
    background: ${Theme.colors['color-primary-darker-60']};

    color: ${Theme.colors['color-neutral-white']};
    font-weight: ${Theme.fontWeights['font-weight-bold']};
  }
`;
