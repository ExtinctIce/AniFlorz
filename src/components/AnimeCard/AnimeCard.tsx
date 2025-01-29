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
          <div className="absolute top-0 inset-0 bg-black/80 z-10 flex p-2 group-hover:scale-105 flex-col">
            <p className="relative text-lg font-bold m-2 opacity-80">{title?.slice(0, 71)}</p>
            <p className="text-white text-sm md:text-base opacity-80 m-1">
              {desc?.slice(0, 90)}
            </p>
          </div>
        )}
        <img
          src={`https://static-libria.weekstorm.one${poster}`}
          alt="poster"
          className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-105 brightness-90 hover:blur-3xl"
        />
      </Link>
      <Link
        to={`/titles/${code}`}
        className="relative bottom-10 block mt-2 text-xl font-normal text-center truncate"
      ></Link>
    </div>
  );
};

export default AnimeCard;
