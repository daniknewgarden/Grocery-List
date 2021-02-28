import styled from "styled-components";

export type TextAreaProps = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  title: string;
  value?: string;
  //Default states
  disabled?: boolean;
  // Custom styles
  className?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
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
      <textarea
        className="textarea"
        name={name}
        id={name}
        onChange={onChange}
        disabled={disabled}
        placeholder={title}
      >
        {value}
      </textarea>
    </div>
  );
};

const TextAreaStyled = styled(TextArea)`
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

  .textarea {
    resize: none;
    border: none;
    border-radius: 8px;

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

export default TextAreaStyled;
