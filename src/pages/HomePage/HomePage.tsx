import { useEffect, useState } from "react";
import { getSchedule } from "../../api";
import { IScheduleArray } from "../../types/schedule.type";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
// import trailer from "../../assets/SoloLevel.png";
import { Link } from "react-router-dom";

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
      {/* <div className="w-full bg-cover z-[-1000]">
        <img className="rounded-3xl" src={trailer} alt="" />
      </div> */}
      {/* <div className="w-full bg-cover z-[-1000] mb-20">
        <img
          className="rounded-3xl relative z-[0] w-full h-full bg-custom-gradient"
          src={trailer}
          alt=""
        />
      </div> */}
      <div className="">
        <div className="absolute top-28">
          <div className="">Поднятие уровня в одиночку</div>
          <button className="font-bold border 2px solid black text-2xl text-black">
            <Link
              to={
                "/titles/ore-dake-level-up-na-ken-season-2-arise-from-the-shadow"
              }
            >
              Смотреть
            </Link>
          </button>
        </div>

        <div>
          <div className="py-2">
            <h1 className="ml-3 text-3xl font-semibold z-[1]">Все онгоинги</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-5 mt-5 z-100">
              {schedule[0]?.list &&
                schedule[0].list.map((item) => (
                  <AnimeCard
                    id={item.id}
                    key={item.id}
                    poster={item.posters.original.url}
                    title={item.names.ru}
                    code={item.code}
                    // genres={item.genres}
                  />
                ))}
            </div>
          </div>
        </div>

        <div>
          <div className="py-2">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-5 z-100">
              {schedule[1]?.list &&
                schedule[1].list.map((item) => (
                  <AnimeCard
                    id={item.id}
                    key={item.id}
                    poster={item.posters.original.url}
                    title={item.names.ru}
                    code={item.code}
                    // genres={item.genres}
                  />
                ))}
            </div>
          </div>
          <div className="py-2">
            <h1 className="text-2xl font-semibold"></h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-5 mt-5 z-100">
              {schedule[2]?.list &&
                schedule[2].list.map((item) => (
                  <AnimeCard
                    id={item.id}
                    key={item.id}
                    poster={item.posters.original.url}
                    title={item.names.ru}
                    code={item.code}
                    // genres={item.genres}
                  />
                ))}
            </div>
          </div>
          <div className="py-2">
            <h1 className="text-2xl font-semibold"></h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-5 mt-5">
              {schedule[3]?.list &&
                schedule[3].list.map((item) => (
                  <AnimeCard
                    key={item.id}
                    id={item.id}
                    poster={item.posters.original.url}
                    title={item.names.ru}
                    code={item.code}
                    // genres={item.genres}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="py-2">
          <h1 className="text-2xl font-semibold"></h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-5">
            {schedule[4]?.list &&
              schedule[4].list.map((item) => (
                <AnimeCard
                  id={item.id}
                  key={item.id}
                  poster={item.posters.original.url}
                  title={item.names.ru}
                  code={item.code}
                  // genres={item.genres}
                />
              ))}
          </div>
        </div>
        <div className="py-2">
          <h1 className="text-2xl font-semibold"></h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-5 mt-5">
            {schedule[5]?.list &&
              schedule[5].list.map((item) => (
                <AnimeCard
                  id={item.id}
                  key={item.id}
                  poster={item.posters.original.url}
                  title={item.names.ru}
                  code={item.code}
                  // genres={item.genres}
                />
              ))}
          </div>
        </div>
        <div className="py-2">
          <h1 className="text-2xl font-semibold"></h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-5 mt-5">
            {schedule[6]?.list &&
              schedule[6].list.map((item) => (
                <AnimeCard
                  key={item.id}
                  id={item.id}
                  poster={item.posters.original.url}
                  title={item.names.ru}
                  code={item.code}
                  // genres={item.genres}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
