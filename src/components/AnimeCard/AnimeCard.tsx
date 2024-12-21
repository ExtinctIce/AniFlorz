import { Link } from "react-router-dom";

interface IAnimeCard {
  id: number;
  poster: string;
  title?: string;
  description?: string;
  code?: string;
  genres: string[];
}

const AnimeCard = ({ id, poster, title, code, genres }: IAnimeCard) => {
  return (
    <div className="relative border border-zinc-800 rounded-xl" key={id}>
      <Link to={`/titles/${code}`} className="block">
        <img
          src={`https://static-libria.weekstorm.one${poster}`}
          alt=""
          className="w-full cursor-pointer rounded-xl"
        />
      </Link>
      <Link to={`/titles/${code}`} className="block text-center py-2 ">
        {title}
      </Link>
      <Link
        to={`/titles/${code}`}
        className="py-1 text-center mb-1 flex justify-center text-gray-500"
      >
        {genres?.join(", ")}
      </Link>
    </div>
  );
};

export default AnimeCard;
