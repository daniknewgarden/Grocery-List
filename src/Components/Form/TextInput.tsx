import styled from "styled-components";

export type TextInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  title: string;
  value?: string;
  //Default states
  disabled?: boolean;
  // Custom styles
  className?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  name,
  title = "Label",
  value,
  onChange,
  className,
  disabled,
}) => {
  return (
    <div className={className}>
      <label className="label" htmlFor={name}>
        {title}
      </label>
      <input
        type="text"
        className="input"
        name={name}
        id={name}
        defaultValue={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={title}
      />
    </div>
  );
};

const TextInputStyled = styled(TextInput)`
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
    resize: none;
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
  }
`;

export default TextInputStyled;
