import React, { useRef, useState } from 'react';

import { useClickAway } from '@hooks/useClickAway';

import { Options } from './Options';

import { Container, Label, Icon, ErrorMessage } from './Select.styles';

export type Option = {
  label: string;
  value: string | number | boolean | Date;
};

export type Value = { options: Option[]; formatted: string };

interface SelectProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onSelect'> {
  name: string;
  label?: string;
  errorMessage?: string;
  required?: boolean;
  options: Option[];
  multiple?: boolean;
  onSelect: (option: Option[]) => void;
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  errorMessage,
  options,
  multiple = false,
  onSelect,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [value, setValue] = useState<Value>({ options: [], formatted: '' });

  function handleFocus() {
    if (rest.disabled) {
      return;
    }

    setIsFocused(true);

    setIsOpen(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  function handleClose() {
    inputRef.current?.focus();
    inputRef.current?.blur();

    setIsOpen(false);

    handleBlur();
  }

  function handleSelect(option: Option) {
    if (multiple) {
      setValue((state) => ({
        options: [...state.options, option],
        formatted: state.options.join(', '),
      }));

      const prevValue = inputRef.current?.getAttribute('value');

      inputRef.current?.setAttribute(
        'value',
        prevValue ? `${prevValue}, ${option.label}` : option.label,
      );

      onSelect([...value.options, option]);
    } else {
      setValue((state) => ({
        options: [option],
        formatted: state.options.join(', '),
      }));

      inputRef.current?.setAttribute('value', option.label);

      onSelect([option]);
    }

    setIsOpen(false);
    setIsFocused(false);
  }

  useClickAway(containerRef, handleClose, { enabled: isOpen });

  return (
    <Container
      data-testid={`select-container-${name}`}
      ref={containerRef}
      focused={isFocused ? 1 : 0}
      isErrored={!!errorMessage}
      disabled={rest.disabled || false}
    >
      {label && (
        <Label data-testid={`select-label-${name}`}>
          {label}
          {rest.required && <span />}
        </Label>
      )}

      <input
        {...rest}
        data-testid={`select-input-${name}`}
        ref={inputRef}
        type="text"
        autoComplete="off"
        readOnly
        onFocus={handleFocus}
        name={name}
      />

      <Icon width={20} height={20} focused={isFocused ? 1 : 0} />

      {errorMessage && (
        <ErrorMessage data-testid={`select-error-${name}`}>
          {errorMessage}
        </ErrorMessage>
      )}

      <Options isOpen={isOpen} options={options} onSelect={handleSelect} />
    </Container>
  );
};
