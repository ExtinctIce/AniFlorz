import { useEffect, useState } from "react";
import { getSchedule } from "../../api";
import { IScheduleArray } from "../../types/schedule.type";
import AnimeCard from "../../components/AnimeCard/AnimeCard";

const HomePage = () => {
  const [schedule, setSchedule] = useState<IScheduleArray>([]);

  const createSchedule = async () => {
    const timeOutSchedule = await getSchedule();
    setSchedule(timeOutSchedule);
  };
  useEffect(() => {
    createSchedule();
  }, []);

  return (
    <>
      <div className="container py-[10px] z-[100]">
        {/* <h1 className="text-center text-3xl font-semibold">
          Расписание выхода серий
        </h1> */}
        <div>
          <div className="py-5 z-100">
            <h1 className="text-3xl font-semibold z-[-100]">Все онгоинги</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5 z-100">
              {schedule[0]?.list &&
                schedule[0].list.map((item) => (
                  <AnimeCard
                    id={item.id}
                    key={item.id}
                    poster={item.posters.original.url}
                    title={item.names.ru}
                    code={item.code}
                    genres={item.genres}
                  />
                ))}
            </div>
          </div>
        </div>
        <div>
          <div className="py-5">
            <h1 className="text-2xl font-semibold"></h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5">
              {schedule[1]?.list &&
                schedule[1].list.map((item) => (
                  <AnimeCard
                    id={item.id}
                    key={item.id}
                    poster={item.posters.original.url}
                    title={item.names.ru}
                    code={item.code}
                    genres={item.genres}
                  />
                ))}
            </div>
          </div>
          <div className="py-5">
            <h1 className="text-2xl font-semibold"></h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5">
              {schedule[2]?.list &&
                schedule[2].list.map((item) => (
                  <AnimeCard
                    id={item.id}
                    key={item.id}
                    poster={item.posters.original.url}
                    title={item.names.ru}
                    code={item.code}
                    genres={item.genres}
                  />
                ))}
            </div>
          </div>
          <div className="py-5">
            <h1 className="text-2xl font-semibold"></h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5">
              {schedule[3]?.list &&
                schedule[3].list.map((item) => (
                  <AnimeCard
                    key={item.id}
                    id={item.id}
                    poster={item.posters.original.url}
                    title={item.names.ru}
                    code={item.code}
                    genres={item.genres}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-semibold"></h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5">
            {schedule[4]?.list &&
              schedule[4].list.map((item) => (
                <AnimeCard
                  id={item.id}
                  key={item.id}
                  poster={item.posters.original.url}
                  title={item.names.ru}
                  code={item.code}
                  genres={item.genres}
                />
              ))}
          </div>
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-semibold"></h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5">
            {schedule[5]?.list &&
              schedule[5].list.map((item) => (
                <AnimeCard
                  id={item.id}
                  key={item.id}
                  poster={item.posters.original.url}
                  title={item.names.ru}
                  code={item.code}
                  genres={item.genres}
                />
              ))}
          </div>
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-semibold"></h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5">
            {schedule[6]?.list &&
              schedule[6].list.map((item) => (
                <AnimeCard
                  key={item.id}
                  id={item.id}
                  poster={item.posters.original.url}
                  title={item.names.ru}
                  code={item.code}
                  genres={item.genres}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
