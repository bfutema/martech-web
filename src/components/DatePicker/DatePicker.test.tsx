import { fireEvent, render, RenderResult } from '@testing-library/react';

import { DateHelper } from '@helpers/DateHelper';
import { Theme } from '@styles/theme';

import { DatePicker } from './DatePicker';

type SutParams = {
  label?: string;
  required?: boolean;
  errorMessage?: string;
  disabled?: boolean;
};

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (params?: SutParams): SutTypes => {
  const sut = render(
    <div data-testid="outside">
      <DatePicker name="date-picker" onSelect={jest.fn()} {...params} />
    </div>,
  );

  return { sut };
};

describe('DatePicker', () => {
  it('should render a DatePicker initial state', async () => {
    const { sut } = makeSut();

    const datePickerContainer = sut.getByTestId(
      'date-picker-container-date-picker',
    );

    expect(datePickerContainer).toBeInTheDocument();
    expect(datePickerContainer).toHaveStyle(
      `border: 1px solid ${Theme.colors['color-neutral-gray-40']}`,
    );
  });

  it('should render a disabled DatePicker', async () => {
    const { sut } = makeSut({ disabled: true });

    const datePickerContainer = sut.getByTestId(
      'date-picker-container-date-picker',
    );
    const datePickerInput = sut.getByTestId('date-picker-input-date-picker');

    expect(datePickerContainer).toHaveStyle(
      `border: 1px solid ${Theme.colors['color-neutral-gray-40']}`,
    );
    expect(datePickerInput).toBeDisabled();
  });

  it('should render a DatePicker with label', async () => {
    const { sut } = makeSut({ label: 'Nome!' });

    const datePickerContainer = sut.getByTestId(
      'date-picker-container-date-picker',
    );
    const datePickerLabel = sut.getByTestId('date-picker-label-date-picker');
    const styleContainer = window.getComputedStyle(datePickerContainer);

    expect(styleContainer.borderColor).toBe(
      Theme.colors['color-neutral-gray-40'].toLowerCase(),
    );
    expect(datePickerLabel).toBeInTheDocument();
  });

  it('should render a DatePicker with label and required', async () => {
    const { sut } = makeSut({ label: 'Nome!', required: true });

    const datePickerContainer = sut.getByTestId(
      'date-picker-container-date-picker',
    );
    const datePickerLabel = sut.getByTestId('date-picker-label-date-picker');
    const styleContainer = window.getComputedStyle(datePickerContainer);

    expect(styleContainer.borderColor).toBe(
      Theme.colors['color-neutral-gray-40'].toLowerCase(),
    );
    expect(datePickerLabel).toBeInTheDocument();
  });

  it('should render a DatePicker with error message', async () => {
    const { sut } = makeSut({ errorMessage: 'O campo é obrigatório!' });

    const datePickerContainer = sut.getByTestId(
      'date-picker-container-date-picker',
    );
    const datePickerErrorMessage = sut.getByTestId(
      'date-picker-error-date-picker',
    );
    const styleContainer = window.getComputedStyle(datePickerContainer);

    expect(styleContainer.borderColor).toBe(
      Theme.colors['color-error-darker-60'].toLowerCase(),
    );
    expect(datePickerErrorMessage).toBeInTheDocument();
  });

  it('should change the border color on focus', async () => {
    const { sut } = makeSut();

    const datePickerContainer = sut.getByTestId(
      'date-picker-container-date-picker',
    );
    const datePickerInput = sut.getByTestId('date-picker-input-date-picker');
    const styleContainer = window.getComputedStyle(datePickerContainer);

    fireEvent.focus(datePickerInput);

    expect(styleContainer.borderColor).toBe(
      Theme.colors['color-neutral-gray-40'].toLowerCase(),
    );
  });

  it('should not change the border color on focus when its disabled', async () => {
    const { sut } = makeSut({ disabled: true });

    const datePickerContainer = sut.getByTestId(
      'date-picker-container-date-picker',
    );
    const datePickerInput = sut.getByTestId('date-picker-input-date-picker');
    const styleContainer = window.getComputedStyle(datePickerContainer);

    fireEvent.focus(datePickerInput);

    expect(styleContainer.borderColor).toBe(
      Theme.colors['color-neutral-gray-70'].toLowerCase(),
    );
  });

  it('should change the border color on focus and change on blur', async () => {
    const { sut } = makeSut();

    const datePickerContainer = sut.getByTestId(
      'date-picker-container-date-picker',
    );
    const datePickerInput = sut.getByTestId('date-picker-input-date-picker');
    const outside = sut.getByTestId('outside');
    const styleContainer = window.getComputedStyle(datePickerContainer);

    fireEvent.focus(datePickerInput);
    fireEvent.pointerDown(outside);

    expect(styleContainer.borderColor).toBe(
      Theme.colors['color-neutral-gray-40'].toLowerCase(),
    );
  });

  it('should be able to navigate to previous month', async () => {
    const { sut } = makeSut();

    const date = DateHelper.subMonths(new Date(), 1);

    const dayString = String(date.getDate());
    const monthString = String(date.getMonth());
    const yearString = String(date.getFullYear());

    const parsedDate = `${dayString}_${monthString}_${yearString}`;

    const previous = sut.getByTestId('date-picker-control-prev');

    fireEvent.click(previous);

    const day = sut.getByTestId(`date-picker-day-${parsedDate}`);

    expect(day).toBeInTheDocument();
  });

  it('should be able to navigate to next month', async () => {
    const { sut } = makeSut();

    const date = DateHelper.addMonths(new Date(), 1);

    const dayString = String(date.getDate());
    const monthString = String(date.getMonth());
    const yearString = String(date.getFullYear());

    const parsedDate = `${dayString}_${monthString}_${yearString}`;

    const next = sut.getByTestId('date-picker-control-next');

    fireEvent.click(next);

    const day = sut.getByTestId(`date-picker-day-${parsedDate}`);

    expect(day).toBeInTheDocument();
  });

  it('should be able to select one day', async () => {
    const { sut } = makeSut();

    const today = new Date();

    const dayString = String(today.getDate());
    const monthString = String(today.getMonth());
    const yearString = String(today.getFullYear());

    const parsedDate = `${dayString}_${monthString}_${yearString}`;

    const datePickerInput = sut.getByTestId(
      'date-picker-input-date-picker',
    ) as HTMLInputElement;
    const day = sut.getByTestId(`date-picker-day-${parsedDate}`);

    fireEvent.click(day);

    expect(datePickerInput.value).toBe(DateHelper.format(today));
  });
});
