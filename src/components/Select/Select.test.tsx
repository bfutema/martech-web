import { fireEvent, render, RenderResult } from '@testing-library/react';

import { Theme } from '@styles/theme';

import { Select } from './Select';

type SutParams = {
  label?: string;
  required?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  multiple?: boolean;
};

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (params?: SutParams): SutTypes => {
  const sut = render(
    <div data-testid="outside">
      <Select
        name="select"
        onSelect={jest.fn()}
        options={[
          { label: 'Opção 1', value: 1 },
          { label: 'Opção 2', value: 2 },
          { label: 'Opção 3', value: 3 },
        ]}
        {...params}
      />
    </div>,
  );

  return { sut };
};

describe('Select', () => {
  it('should render a Select initial state', async () => {
    const { sut } = makeSut();

    const selectContainer = sut.getByTestId('select-container-select');

    expect(selectContainer).toBeInTheDocument();
    expect(selectContainer).toHaveStyle(
      `border: 1px solid ${Theme.colors['color-neutral-gray-40']}`,
    );
  });

  it('should render a disabled Select', async () => {
    const { sut } = makeSut({ disabled: true });

    const selectContainer = sut.getByTestId('select-container-select');
    const selectInput = sut.getByTestId('select-input-select');

    expect(selectContainer).toHaveStyle(
      `border: 1px solid ${Theme.colors['color-neutral-gray-40']}`,
    );
    expect(selectInput).toBeDisabled();
  });

  it('should render a Select with label', async () => {
    const { sut } = makeSut({ label: 'Nome!' });

    const selectContainer = sut.getByTestId('select-container-select');
    const selectLabel = sut.getByTestId('select-label-select');
    const styleContainer = window.getComputedStyle(selectContainer);

    expect(styleContainer.borderColor).toBe(
      Theme.colors['color-neutral-gray-40'].toLowerCase(),
    );
    expect(selectLabel).toBeInTheDocument();
  });

  it('should render a Select with label and required', async () => {
    const { sut } = makeSut({ label: 'Nome!', required: true });

    const selectContainer = sut.getByTestId('select-container-select');
    const selectLabel = sut.getByTestId('select-label-select');
    const styleContainer = window.getComputedStyle(selectContainer);

    expect(styleContainer.borderColor).toBe(
      Theme.colors['color-neutral-gray-40'].toLowerCase(),
    );
    expect(selectLabel).toBeInTheDocument();
  });

  it('should render a Select with error message', async () => {
    const { sut } = makeSut({ errorMessage: 'O campo é obrigatório!' });

    const selectContainer = sut.getByTestId('select-container-select');
    const selectErrorMessage = sut.getByTestId('select-error-select');
    const styleContainer = window.getComputedStyle(selectContainer);

    expect(styleContainer.borderColor).toBe(
      Theme.colors['color-error-darker-60'].toLowerCase(),
    );
    expect(selectErrorMessage).toBeInTheDocument();
  });

  it('should change the border color on focus', async () => {
    const { sut } = makeSut();

    const selectContainer = sut.getByTestId('select-container-select');
    const selectInput = sut.getByTestId('select-input-select');
    const styleContainer = window.getComputedStyle(selectContainer);

    fireEvent.focus(selectInput);

    expect(styleContainer.borderColor).toBe(
      Theme.colors['color-neutral-gray-40'].toLowerCase(),
    );
  });

  it('should not change the border color on focus when its disabled', async () => {
    const { sut } = makeSut({ disabled: true });

    const selectContainer = sut.getByTestId('select-container-select');
    const selectInput = sut.getByTestId('select-input-select');
    const styleContainer = window.getComputedStyle(selectContainer);

    fireEvent.focus(selectInput);

    expect(styleContainer.borderColor).toBe(
      Theme.colors['color-neutral-gray-70'].toLowerCase(),
    );
  });

  it('should change the border color on focus and change on blur', async () => {
    const { sut } = makeSut();

    const selectContainer = sut.getByTestId('select-container-select');
    const selectInput = sut.getByTestId('select-input-select');
    const outside = sut.getByTestId('outside');
    const styleContainer = window.getComputedStyle(selectContainer);

    fireEvent.focus(selectInput);
    fireEvent.pointerDown(outside);

    expect(styleContainer.borderColor).toBe(
      Theme.colors['color-neutral-gray-40'].toLowerCase(),
    );
  });

  it('should be able to select one option', async () => {
    const { sut } = makeSut();

    const selectInput = sut.getByTestId(
      'select-input-select',
    ) as HTMLInputElement;
    const option = sut.getByTestId('select-option-1');

    fireEvent.click(option);

    expect(selectInput.value).toBe('Opção 1');
  });

  it('should be able to select multiple options', async () => {
    const { sut } = makeSut({ multiple: true });

    const selectContainer = sut.getByTestId('select-container-select');
    const selectInput = sut.getByTestId(
      'select-input-select',
    ) as HTMLInputElement;
    const option1 = sut.getByTestId('select-option-1');
    fireEvent.click(option1);

    const option2 = sut.getByTestId('select-option-2');
    fireEvent.click(option2);

    const styleContainer = window.getComputedStyle(selectContainer);

    expect(styleContainer.borderColor).toBe('#dce3ea');
    expect(selectInput.value).toBe('Opção 1, Opção 2');
  });
});
