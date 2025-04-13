import React, { useState } from 'react';

interface AnimeCardProps {
  id: number;
  poster: string;
  title: string;
  code: string;
}

const AniCard: React.FC<AnimeCardProps> = ({ poster, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={poster}
        alt={title}
        className="rounded-lg w-full h-auto object-cover aspect-[2/3]"
      />
      <div
          className={`absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center text-white font-bold transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {isHovered && 
            <div className="text-center p-2">
              {title}
            </div>
            }
        </div>
    </div>
  );
};

export default AniCard;
