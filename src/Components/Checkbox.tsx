import React from "react";
//Styled components
import styled from "styled-components";

export type CheckBoxProps = {
  onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  text: string;
  //Default states
  disabled?: boolean;
  defaultChecked?: boolean;
  // Custom styles
  className?: string;
};

const Checkbox: React.FunctionComponent<CheckBoxProps> = ({
  name,
  text = "Label",
  onCheck,
  className,
  defaultChecked,
  disabled,
}) => (
  <div className={className}>
    <label htmlFor={name}>{text}</label>
    <input
      type="checkbox"
      name={name}
      id={name}
      onChange={onCheck}
      value={text}
      disabled={disabled}
      defaultChecked={defaultChecked}
    />
  </div>
);

//Styles
const StyledCheckbox = styled(Checkbox)`
  label {
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

  input {
    margin: 0;
    width: 30px;
    height: 30px;
    appearance: none;

    &::before {
      content: "";
      display: inline-grid;
      width: 100%;
      height: 100%;

      border-radius: 5px;
    }

    --color-main: #99879d;

    &::before {
      box-shadow: 0 0 0 2px var(--color-main);
    }

    &:hover {
      --color-main: #b29eff;
      opacity: 0.8;
    }

    &:focus {
      outline: none;
      --color-main: #9378ff;
      opacity: 0.8;
      &:checked {
        --color-main: #b29eff;
      }
    }

    &:disabled {
      --color-main: #e3e4eb;

      &:hover,
      &:checked {
        --color-main: #e3e4eb;
      }
    }

    &:checked {
      --color-main: #9378ff;
      &::before {
        background-image: url("data:image/svg+xml,%3Csvg width='14' height='11' viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.7069 0.793C13.8944 0.980528 13.9997 1.23484 13.9997 1.5C13.9997 1.76516 13.8944 2.01947 13.7069 2.207L5.70692 10.207C5.51939 10.3945 5.26508 10.4998 4.99992 10.4998C4.73475 10.4998 4.48045 10.3945 4.29292 10.207L0.292919 6.207C0.110761 6.0184 0.00996641 5.7658 0.0122448 5.5036C0.0145233 5.2414 0.119692 4.99059 0.3051 4.80518C0.490508 4.61977 0.741321 4.5146 1.00352 4.51233C1.26571 4.51005 1.51832 4.61084 1.70692 4.793L4.99992 8.086L12.2929 0.793C12.4804 0.605529 12.7348 0.500214 12.9999 0.500214C13.2651 0.500214 13.5194 0.605529 13.7069 0.793Z' fill='white'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center;
        background-color: var(--color-main);
      }
    }
  }
`;

export default StyledCheckbox;
