import { Link } from "react-router-dom";

interface IAnimeCard {
  id: number;
  poster: string;
  title?: string;
  description?: string;
  code?: string;
  // genres: string[];
}

const AnimeCard = ({ id, poster, title, code }: IAnimeCard) => {
  return (
    <div className="rounded-xl" key={id}>
      <Link to={`/titles/${code}`} className="block">
        <img
          src={`https://static-libria.weekstorm.one${poster}`}
          alt=""
          className="w-full cursor-pointer rounded-xl brightness-75"
        />
      </Link>
      <Link
        to={`/titles/${code}`}
        className="relative bottom-7 font-normal block truncate text-xl"
      >
        {title}
      </Link>
      {/* <Link to={`/titles/${code}`} className="text-center flex justify-center">
        {genres?.join(", ")}
      </Link> */}
    </div>
  );
};

export default AnimeCard;
