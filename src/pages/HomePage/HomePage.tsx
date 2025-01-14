import { useEffect, useState } from "react";
import { getSchedule } from "../../api";
import { IScheduleArray } from "../../types/schedule.type";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import trailer from "../../assets/SoloLevel.png";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

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
      <div className="w-full bg-cover z-[-1000] mb-20">
        <img
          className="rounded-3xl relative z-[0] w-full h-full bg-custom-gradient brightness-50 [radial-gradient(circle,_rgba(0,_0,_0,_0.235)_0%,_rgba(0,_0,_0,_0.477)_28%,_rgba(0,_0,_0,_0.678)_62%,_rgba(0,_0,_0,_0.863)_87%),_linear-gradient(0deg,_#000,_transparent_40%)]"
          src={trailer}
          alt=""
        />
      </div>
      <div className="">
        <div className="absolute top-80 ml-12">
          <div className="">
            <h1 className="text-7xl font-medium mb-2">
              Поднятие уровня в одиночку
            </h1>
            <p className="mb-3 text-neutral-300 text-xl">
              По всему миру без конца появляются врата, из которых на улицы
              городов лезут страшные чудовища. Защищают же человечество так
              называемые охотники...
            </p>
          </div>
          <button className="bg-white hover:bg-zinc-100 text-black font-bold text-sm py-2 px-5 rounded-full flex">
            <FaPlay className="mt-1 mr-3 text-xs" />

            <Link to={"/titles/ore-dake-level-up-na-ken"}>
              Доступно на сайте
            </Link>
          </button>
        </div>

        <div>
          <div className="py-2 absolute top-3/4">
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
          <div className="mt-44">
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
          <div className="">
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
