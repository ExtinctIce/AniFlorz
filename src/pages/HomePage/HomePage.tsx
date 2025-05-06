import { useEffect, useState } from "react";
import { getSchedule } from "../../shared/api";
import { IScheduleArray } from "../../shared/types/schedule.type";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import TrailerAnimeRandom from "../../features/MainPage/TrailerAnimeRandom";
import AnimeCategoryAll from "../../features/MainPage/AnimeCategoryAll";
import IntegrationMain from "../../shared/ui/integration/IntegrationMain";
import SearchMain from "../../widgets/SearchWidgets/SearchMain";
import { GenresItem } from "../../features/MainPage/genresItem/GenresItem";
import { FranchiesesPage } from "../../features/MainPage/franchieses/FranchiesesPage";
import { AnimeCommunity } from "../../features/MainPage/CommunityPage/AnimeCommunity";

const HomePage = () => {
  const [schedule, setSchedule] = useState<IScheduleArray>([]);
  const [animeCardId, setAnimeCardId] = useState<number>(0);

  const createSchedule = async () => {
    const timeOutSchedule = await getSchedule();
    if (timeOutSchedule) {
      setSchedule(timeOutSchedule);
    }
  };

  useEffect(() => {
    createSchedule();
  }, []);

  const handleChooseAnimeCard = (id: number, type: string) => {
    if (type === "show") return setAnimeCardId(id);
    if (type === "delete") return setAnimeCardId(0);
  };

  const descCardId6 = schedule[0]?.list.find((card) => card.id === animeCardId);
  const description6 = descCardId6?.description;

  return (
    <>
      <SearchMain />
      <TrailerAnimeRandom />
      <div>
        <div className="py-2 absolute top-3/4">
          <h1 className="ml-5 text-3xl font-semibold z-[1]">Выходят сейчас</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-4 mt-3 ml-2">
            {schedule[0]?.list &&
              schedule[0].list
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
            <IntegrationMain
              className="absolute top-10 right-0"
              to="/gotitles"
              text="Посмотреть всё"
            />
          </div>
        </div>
      </div>
      <h1 className="ml-5 text-3xl font-semibold mb-1">Библиотека</h1>
      <AnimeCategoryAll />
      <h1 className="ml-5 text-3xl font-semibold mb-1 mt-8">
        Жанры на любой вкус
      </h1>
      <GenresItem />
      <h1 className="ml-5 text-3xl font-semibold mt-3">
        Может быть вам понравится
      </h1>
      <FranchiesesPage />
      <h1 className="ml-5 text-3xl font-semibold">
        Контент аниме коммьюнити (
        <span className="text-red-600">Anilibria</span>)
      </h1>
      <AnimeCommunity />
    </>
  );
};

export default HomePage;
