import { Link } from "react-router-dom";
import { FC } from "react";

interface IAnimeCard {
  id: number;
  poster: string;
  title?: string;
  code?: string;
  handleChooseAnimeCard: (id: number, type: string) => void;
  animeCardId: number;
  desc?: string;
  
}

const AnimeCard: FC<IAnimeCard> = ({
  id,
  poster,
  title,
  code,
  handleChooseAnimeCard,
  animeCardId,
  desc,
}) => {
  return (
    <div
      className="relative rounded-xl overflow-hidden group"
      key={id}
      onMouseEnter={() => handleChooseAnimeCard(id, "show")}
      onMouseLeave={() => handleChooseAnimeCard(id, "delete")}
    >
      <Link to={`/titles/${code}`} className="relative block">
        {animeCardId === id && (
          <div className="absolute top-0 inset-0 bg-black/80 z-10 flex justify-center p-1">
            <p className="text-white  text-sm md:text-base">
              {desc?.slice(0, 90)}
              <div className="relative top-14 text-lg">{title?.slice(0, 40)}</div>
            </p>
          </div>
        )}
        <img
          src={`https://static-libria.weekstorm.one${poster}`}
          alt="poster"
          className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-95"
        />
      </Link>
      <Link 
        to={`/titles/${code}`}
        className="relative bottom-10 block mt-2 text-xl font-normal text-center truncate"
      >
        {title}
      </Link>
    </div>
  );
};

export default AnimeCard;
