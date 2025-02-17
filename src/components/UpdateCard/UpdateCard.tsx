import { Link } from "react-router-dom";
import { UpdateCardProps } from "./UpdateCard.types";

const UpdateCard = ({ code, image, title }: UpdateCardProps) => {
  return (
    <>
      <div className="w-full border-neutral-800 rounded-xl p-1">
        <Link to={`/titles/${code}`}>
          <img src={`https://static-libria.weekstorm.one${image}`} alt="" />
        </Link>
        <Link to={`/titles/${code}`}>
          <h2 className="text-lg truncate">{title}</h2>
        </Link>
      </div>
    </>
  );
};

export default UpdateCard;
