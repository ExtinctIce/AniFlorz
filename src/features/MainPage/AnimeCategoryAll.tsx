import { useEffect, useState } from "react";
import { api } from "../../api";
import { List, Ischedule } from "../../types/schedule.type";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import Integration from "../../shared/IntegrationMain";

const AnimeCategoryAll = () => {
  const [arrayAnime, setArrayAnime] = useState<List[]>([]);
  const [animeCardId, setAnimeCardId] = useState<number>(0);
  const [description, setDescription] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get<Ischedule>("/v3/title/updates", {
        params: {
          playlist_type: "array",
          items_per_page: 9,
        },
      });
      setArrayAnime(response.data.list);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const foundCard = arrayAnime.find((card) => card.id === animeCardId);
    setDescription(foundCard?.description);
  }, [animeCardId, arrayAnime]);

  const handleChooseAnimeCard = (id: number, type: string) => {
    if (type === "show") setAnimeCardId(id);
    if (type === "delete") setAnimeCardId(0);
  };

  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-4 ml-2">
          {arrayAnime.map((title) => (
            <AnimeCard
              id={title.id}
              key={title.id}
              poster={title.posters.original.url}
              title={title.names.ru}
              code={title.code}
              desc={description}
              animeCardId={animeCardId}
              handleChooseAnimeCard={handleChooseAnimeCard}
            />
          ))}
          <Integration className="absolute right-0 z-20 px-1 text-transparent bg-gradient bg-neutral-900 opacity-80 hover:bg-neutral-900 transition-colors hover:opacity-75 duration-200 rounded-sm cursor-pointer bg-opacity-30" to="/serials" text="Посмотреть всё" />
        </div>
      </div>
    </>
  );
};

export default AnimeCategoryAll;
