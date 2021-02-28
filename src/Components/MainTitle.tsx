import styled from "styled-components";

export type TitleProps = {
  text: string;
  size?: string;
  color?: string;
  className?: string;
};

const MainTitle: React.FC<TitleProps> = ({ text, className }) => {
  return <h1 className={className}>{text}</h1>;
};

const MainTitleStyled = styled(MainTitle)`
  font-size: 39px;
  line-height: 52px;
  font-weight: 900;
`;

export default MainTitleStyled;
