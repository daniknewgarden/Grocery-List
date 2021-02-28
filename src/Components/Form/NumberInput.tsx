import { useState, useEffect } from "react";

import styled from "styled-components";

export type NumberInputProps = {
  onChange: (value: number) => void;
  name: string;
  title: string;
  defaultValue?: string;
  min?: number;
  max?: number;
  //Default states
  disabled?: boolean;
  // Custom styles
  className?: string;
};

const NumberInput: React.FC<NumberInputProps> = ({
  name,
  title = "Label",
  defaultValue,
  min = 1,
  max = 5,
  onChange,
  className,
  disabled,
}) => {
  const [value, setValue] = useState<string>(defaultValue ? defaultValue : "5");

  useEffect(() => {
    onChange(parseInt(value));
  }, [onChange, value]);

  const updateValue = (value: string): void => {
    const numValue = parseInt(value);

    if (numValue > min - 1 && numValue < max + 1) {
      setValue(numValue.toString());
    }
  };

  const increment = () => {
    const numValue = parseInt(value) + 1;
    updateValue(numValue.toString());
  };

  const decrement = () => {
    const numValue = parseInt(value) - 1;
    updateValue(numValue.toString());
  };

  return (
    <div className={className}>
      <div>
        <label className="label" htmlFor={name}>
          {title}
        </label>
        <input
          type="number"
          className="input"
          name={name}
          id={name}
          value={value}
          onChange={(e) => updateValue(e.target.value)}
          disabled={disabled}
          placeholder={title}
        />
      </div>
      <div className="buttons-wrapper">
        <input type="button" onClick={decrement} className="button" value="-" />

        <input type="button" onClick={increment} className="button" value="+" />
      </div>
    </div>
  );
};

const NumberInputStyled = styled(NumberInput)`
  display: grid;
  grid-gap: 30px;
  grid-template: 1fr / repeat(2, auto);

  .label {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }

  .input {
    border: none;
    border-radius: 8px;

    width: 100%;

    font-size: 16px;
    line-height: 19px;
    padding: 16px 17px;
    background: #faf9ff;

    &:focus {
      outline: none;
      border: 2px solid #9378ff;
    }

    &::placeholder {
      color: #99879d;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  .buttons-wrapper {
    display: grid;
    grid-gap: 25px;
    grid-template: 1fr / repeat(2, 55px);

    .button {
      --color-main: #9378ff;
      --color-hover: #b29eff;
      --color-focus: #7f5fff;
      --color-disabled: #e3e4eb;

      --color: var(--color-main);

      border: 4px solid var(--color);
      color: var(--color);
      background: transparent;
      border-radius: 5px;
      font-size: 35px;

      &:hover {
        --color: var(--color-hover);
      }
      &:focus,
      &:active {
        outline: none;
        --color: var(--color-focus);
      }
      &:disabled {
        --color: var(--color-disabled);
      }
    }
  }
`;

export default NumberInputStyled;
