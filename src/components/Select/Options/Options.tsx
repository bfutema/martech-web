import React from 'react';

import { v4 } from 'uuid';

import { Option } from '../Select';

import { Container, Item } from './Options.styles';

interface OptionsProps {
  isOpen: boolean;
  options: Option[];
  onSelect: (option: Option) => void;
}

export const Options: React.FC<OptionsProps> = ({
  isOpen,
  options,
  onSelect,
}) => {
  return (
    <Container isOpen={isOpen}>
      {options.map((option) => {
        return (
          <Item
            key={v4()}
            onClick={() => onSelect(option)}
            data-testid={`select-option-${String(option.value)}`}
          >
            {option.label}
          </Item>
        );
      })}
    </Container>
  );
};
