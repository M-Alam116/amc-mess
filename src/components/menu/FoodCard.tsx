import { Button, Card } from "antd";
import { FaPlus } from "react-icons/fa";

const { Meta } = Card;

const FoodCard = ({
  image,
  title,
  description,
  price,
  onAddToCart,
}: {
  image: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}) => {
  return (
    <Card
      className="w-full max-h-fit overflow-hidden shadow-md"
      cover={
        <img
          alt={title}
          className="w-full h-auto aspect-[5/3] object-contain hover:scale-110 transition-transform duration-300 p-2"
          src={image}
        />
      }
      actions={[
        <span className="text-yellow font-bold" key="price">
          PKR {price}
        </span>,
        <Button
          className="bg-black p-2 rounded-full w-fit text-white"
          onClick={onAddToCart}
        >
          <FaPlus />
        </Button>,
      ]}
    >
      <Meta
        title={
          <span className="truncate block" title={title}>
            {title}
          </span>
        }
        description={
          <span className="truncate block" title={description}>
            {description}
          </span>
        }
      />
    </Card>
  );
};

export default FoodCard;
