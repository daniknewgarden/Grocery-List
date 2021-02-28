import styled from "styled-components";
//Swipe to delete
import SwipeToDelete from "react-swipe-to-delete-ios";
//Components
import Title from "./Title";
import Subtitle from "./Subtitle";
import Checkbox from "./Checkbox";
//Assets
import trashIcon from "../assets/trash-icon.svg";

export type ProductCardProps = {
  title: string;
  description: string;
  id: number;
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
  className?: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  id,
  onCheck,
  onDelete,
  className,
}) => {
  return (
    <SwipeToDelete
      onDelete={() => onDelete(id)}
      height={100}
      transitionDuration={250}
      deleteWidth={75}
      deleteColor="#FF7878"
      deleteText="Delete"
      deleteComponent={<img src={trashIcon} alt="trash icon" />}
      disabled={false}
      rtl={false}
    >
      <div className={className}>
        <Checkbox
          name={title}
          text={`Mark ${title} as completed`}
          onCheck={() => onCheck(id)}
        />
        <div className="text-wrapper">
          <Title text={title} />
          <Subtitle text={description} />
        </div>
      </div>
    </SwipeToDelete>
  );
};

const StyledProductCard = styled(ProductCard)`
  width: 100%;
  height: 100%;

  padding: 28px 24px;

  display: grid;
  grid-gap: 25px;
  grid-template: 1fr / auto 1fr;
  place-items: center start;

  background-color: #fff;
  background-repeat: no-repeat;
  background-position: calc(100% - 24px) center;
  background-image: url("data:image/svg+xml,%3Csvg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.63598 13.364L0.221985 11.95L5.17198 7L0.221984 2.05L0.928877 1.3431L1.63598 0.635998L7.99998 7L1.63598 13.364Z' fill='%2399879D'/%3E%3C/svg%3E%0A");
`;

export default StyledProductCard;
