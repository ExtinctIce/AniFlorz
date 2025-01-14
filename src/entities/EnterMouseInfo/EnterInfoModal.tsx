import React, { useState } from "react";
import { getTitle } from "../../api";

interface AnimeCardProps {
  id: number;
  poster: string;
  code: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ poster, code }) => {
  const [title, setTitle] = useState<string | null>(null);
  const handleMouseEnter = async () => {
    if (title) return;
    const titleData = await getTitle(code);
    setTitle(titleData.names.ru);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setTitle(null)}
      className="relative rounded overflow-hidden hover:opacity-75 cursor-pointer"
    >
      <img src={poster} alt="Poster" className="object-cover w-full h-full " />
      {title && (
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-70 w-full rounded-b-md text-white text-center">
          {title}
        </div>
      )}
    </div>
  );
};

export default AnimeCard;
