import { useEffect, useState } from "react";
import { getSchedule } from "../../api";
import { IScheduleArray } from "../../types/schedule.type";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import TrailerAnimeRandom from "../../features/MainPage/TrailerAnimeRandom";
import AnimeCategoryAll from "../../features/MainPage/AnimeCategoryAll";
import Integration from "../../shared/IntegrationMain";
import SearchMain from "../../widgets/SearchWidgets/SearchMain";

const HomePage = () => {
  const [schedule, setSchedule] = useState<IScheduleArray>([]);
  const [animeCardId, setAnimeCardId] = useState<number>(0);

  const createSchedule = async () => {
    const timeOutSchedule = await getSchedule();
    setSchedule(timeOutSchedule);
  };

  useEffect(() => {
    createSchedule();
  }, []);

  const handleChooseAnimeCard = (id: number, type: string) => {
    if (type === "show") setAnimeCardId(id);
    if (type === "delete") setAnimeCardId(0);
  };

  const descCardId6 = schedule[5]?.list.find((card) => card.id === animeCardId);
  const description6 = descCardId6?.description;

  return (
    <>
      <SearchMain />
      <TrailerAnimeRandom />
      <div>
        <div className="py-2 absolute top-3/4">
          <h1 className="ml-5 text-3xl font-semibold z-[1]">Выходят сейчас</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-4 mt-3 ml-2">
            {schedule[5]?.list &&
              schedule[5].list
                .slice(0, 9)
                .map((item) => (
                  <AnimeCard
                    id={item.id}
                    key={item.id}
                    poster={item.posters.original.url}
                    title={item.names.ru}
                    code={item.code}
                    desc={description6}
                    animeCardId={animeCardId}
                    handleChooseAnimeCard={handleChooseAnimeCard}
                  />
                ))}
            <Integration
              className="absolute top-10 right-0"
              to="/gotitles"
              text="Посмотреть всё"
            />
          </div>
        </div>
      </div>
      <h1 className="ml-5 text-3xl font-semibold mb-1">Библиотека</h1>
      <AnimeCategoryAll />
    </>
  );
};

export default HomePage;
