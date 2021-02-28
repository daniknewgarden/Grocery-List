import styled from "styled-components";

export type TitleProps = {
  text: string;
  size?: string;
  color?: string;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return <h2 className={className}>{text}</h2>;
};

const TitleStyled = styled(Title)`
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
`;

export default TitleStyled;
