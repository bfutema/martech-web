import React, { useRef, useState } from 'react';

import { CalendarLine } from '@assets/icons';
import { CalendarDate, DateHelper } from '@helpers/DateHelper';
import { useClickAway } from '@hooks/useClickAway';

import { Calendar } from './Calendar';

import { Container, Label, ErrorMessage } from './DatePicker.styles';

type Format = { showFormat: string; returnFormat: string };
type Value = { original: Date | undefined; formatted: string };

interface DatePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onSelect'> {
  name: string;
  label?: string;
  required?: boolean;
  errorMessage?: string;
  format?: Format;
  onSelect: (date: Date) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  name,
  label,
  errorMessage,
  format = { showFormat: 'dd/MM/yyyy', returnFormat: 'yyyy-MM-dd' },
  onSelect,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [value, setValue] = useState<Value>({
    original: undefined,
    formatted: '',
  });

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
    inputRef.current?.setAttribute('value', value.formatted);

    inputRef.current?.focus();
    inputRef.current?.blur();

    setIsOpen(false);

    handleBlur();
  }

  function handleSelect(day: CalendarDate) {
    const { showFormat } = format;

    setValue({
      original: day.date,
      formatted: DateHelper.format(day.date, showFormat),
    });

    inputRef.current?.setAttribute(
      'value',
      DateHelper.format(day.date, showFormat),
    );

    setIsOpen(false);
    setIsFocused(false);

    onSelect(day.date);
  }

  useClickAway(containerRef, handleClose, { enabled: isOpen });

  return (
    <Container
      ref={containerRef}
      isFocused={isFocused}
      isErrored={!!errorMessage}
      disabled={rest.disabled || false}
      data-testid={`date-picker-container-${name}`}
    >
      {label && (
        <Label data-testid={`date-picker-label-${name}`}>
          {label}
          {rest.required && <span />}
        </Label>
      )}

      <CalendarLine width={20} height={20} />

      <input
        {...rest}
        ref={inputRef}
        name={name}
        type="text"
        autoComplete="off"
        readOnly
        onFocus={handleFocus}
        data-testid={`date-picker-input-${name}`}
      />

      {errorMessage && (
        <ErrorMessage data-testid={`date-picker-error-${name}`}>
          {errorMessage}
        </ErrorMessage>
      )}

      <Calendar
        isOpen={isOpen}
        selectedDate={value.original}
        onSelect={handleSelect}
      />
    </Container>
  );
};
