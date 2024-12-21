import React, { useState, useEffect } from "react";
// import { searchAnime } from "../../api"; // Замените на ваш API-запрос

interface AnimeData {
  id: number;
  title: string;
  poster: string;
}

const SearchAnimeComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<AnimeData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const search = async () => {
      if (searchQuery.length > 2) {
        setIsLoading(true);
        setIsError(false);
        try {
          //   const results = await searchAnime(searchQuery);
          //   setSearchResults(results);
        } catch (error) {
          setIsError(true);
          console.error("Ошибка поиска:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    search();
  }, [searchQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск аниме..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 px-3 py-2 rounded w-full mb-2"
      />

      {isLoading && <p>Идет поиск...</p>}
      {isError && <p>Ошибка при поиске. Попробуйте позже.</p>}

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((anime) => (
            <li key={anime.id} className="border-b p-2 flex items-center">
              {" "}
              {/* Добавлено flex items-center */}
              <img
                src={anime.poster}
                alt={anime.title}
                className="w-16 h-16 mr-4"
              />{" "}
              {/* Изменено для лучшего выравнивания */}
              {anime.title}
            </li>
          ))}
        </ul>
      )}
      {searchResults.length === 0 && searchQuery.length > 2 && (
        <p>Аниме не найдено.</p>
      )}
    </div>
  );
};

export default SearchAnimeComponent;
