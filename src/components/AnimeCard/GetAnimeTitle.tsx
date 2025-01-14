import { Link } from "react-router-dom";

interface GetAnimeTitle {
  id: number;
  title?: string;
  description?: string;
  code?: string;
}

const GetAnimeTitle = ({ id, title, code }: GetAnimeTitle) => {
  return (
    <>
      <div className="relative border border-zinc-800 rounded-xl" key={id}>
        <Link to={`/titles/${code}`} className="block text-center py-2 ">
          {title}
        </Link>
      </div>
    </>
  );
};

export default GetAnimeTitle;
