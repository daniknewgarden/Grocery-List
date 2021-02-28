import React from "react";
//styled components
import styled, { css } from "styled-components";

export type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  ariaLabel?: string;
  // Custom styles
  className?: string;
  big?: boolean;
  rounded?: boolean;
  transparent?: boolean;
  danger?: boolean;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text = "Button",
  ariaLabel = "Click button",
  className,
  disabled,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={className}
    aria-label={ariaLabel}
    disabled={disabled}
  >
    {text}
  </button>
);

//Styles
const sizes = {
  big: css`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    padding: 16px 50px;
  `,
  default: css`
    font-size: 16px;

    padding: 7px 26px;
  `,
};

const corners = {
  rounded: css`
    border-radius: 100px;
  `,
  default: css`
    border-radius: 4px;
  `,
};

const background = {
  transparent: css`
    background: transparent;
    color: var(--color);
    border: 2px solid var(--color);

    &:focus {
      --color: var(--color-hover);
    }
  `,
  filed: css`
    background: var(--color);
    color: var(--color-text);
    border: none;

    &:focus {
      box-shadow: 0 0 0 2px var(--color-outline);
    }
  `,
};

const StyledButton = styled(Button)`
  --color-main: ${({ danger = false }) => (danger ? "#FF7878" : "#9378ff")};
  --color-hover: ${({ danger = false }) => (danger ? "#FFA3A3" : "#b29eff")};
  --color-focus: ${({ danger = false }) => (danger ? "#FF4A4A" : "#7f5fff")};
  --color-disabled: #e3e4eb;
  --color-text: #fff;

  --color: var(--color-main);

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

  font-weight: 500;

  ${({ big = false }) => (big ? sizes["big"] : sizes["default"])}

  ${({ rounded = false }) =>
    rounded ? corners["rounded"] : corners["default"]}

  ${({ transparent = false }) =>
    transparent ? background["transparent"] : background["filed"]}
`;

export default StyledButton;
