import { Link } from "react-router-dom";
import { UpdateCardProps } from "./UpdateCard.types";

const UpdateCard = ({ code, image, title }: UpdateCardProps) => {
  return (
    <>
      <div className="w-full border border-neutral-800 rounded-xl md:p-2">
        <Link to={`/titles/${code}`}>
          <img src={`https://static-libria.weekstorm.one${image}`} alt="" />
        </Link>
        <Link to={`/titles/${code}`}>
          <h2 className="text-center mt-2 text-lg truncate">{title}</h2>
        </Link>
        {/* <p className="py-1 text-center mb-1 flex justify-center text-gray-500">
          {genres}
        </p> */}
      </div>
    </>
  );
};

export default UpdateCard;
