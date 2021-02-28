import styled from "styled-components";

export type SubtitleProps = {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  className?: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ text, className }) => {
  return <h2 className={className}>{text}</h2>;
};

const SubtitleStyled = styled(Subtitle)`
  color: #99879d;
  font-size: 12px;
  line-height: 140%;
  font-weight: 400;
`;

export default SubtitleStyled;
