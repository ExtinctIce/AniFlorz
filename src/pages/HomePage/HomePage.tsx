import { useEffect, useState } from "react";
import { getSchedule } from "../../api";
import { IScheduleArray } from "../../types/schedule.type";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import trailer from "../../assets/SoloLevel.png";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

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

  const descCardId = schedule[0]?.list.find((card) => card.id === animeCardId);
  const description = descCardId?.description;

  const descCardId2 = schedule[2]?.list.find((card) => card.id === animeCardId);
  const description2 = descCardId2?.description;

  const descCardId3 = schedule[2]?.list.find((card) => card.id === animeCardId);
  const description3 = descCardId3?.description;

  const descCardId4 = schedule[3]?.list.find((card) => card.id === animeCardId);
  const description4 = descCardId4?.description;

  const descCardId5 = schedule[4]?.list.find((card) => card.id === animeCardId);
  const description5 = descCardId5?.description;

  const descCardId6 = schedule[5]?.list.find((card) => card.id === animeCardId);
  const description6 = descCardId6?.description;

  const descCardId7 = schedule[6]?.list.find((card) => card.id === animeCardId);
  const description7 = descCardId7?.description;

  return (
    <>
      <div className="w-full bg-cover z-[-10] mb-20">
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

            <Link
              to={
                "/titles/ore-dake-level-up-na-ken-season-2-arise-from-the-shadow"
              }
            >
              Доступно на сайте
            </Link>
          </button>
        </div>

        <div>
          <div className="py-2 absolute top-3/4">
            <h1 className="ml-5 text-3xl font-semibold z-[1]">
              Выходят сейчас
            </h1>
            <div className="ml-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-5 mt-5">
              {schedule[0]?.list &&
                schedule[0].list.map((item) => (
                  <AnimeCard
                    id={item.id}
                    key={item.id}
                    poster={item.posters.original.url}
                    title={item.names.ru}
                    code={item.code}
                    desc={description}
                    animeCardId={animeCardId}
                    handleChooseAnimeCard={handleChooseAnimeCard}
                    // genres={item.genres}
                  />
                ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mt-48">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-5 z-100">
              {schedule[1]?.list &&
                schedule[1].list.map((item) => (
                  <AnimeCard
                    id={item.id}
                    key={item.id}
                    poster={item.posters.original.url}
                    title={item.names.ru}
                    code={item.code}
                    desc={description2}
                    animeCardId={animeCardId}
                    handleChooseAnimeCard={handleChooseAnimeCard}
                    // genres={item.genres}
                  />
                ))}
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-5 mt-5 z-100">
              {schedule[2]?.list &&
                schedule[2].list.map((item) => (
                  <AnimeCard
                    id={item.id}
                    key={item.id}
                    poster={item.posters.original.url}
                    title={item.names.ru}
                    code={item.code}
                    desc={description3}
                    animeCardId={animeCardId}
                    handleChooseAnimeCard={handleChooseAnimeCard}
                    // genres={item.genres}
                  />
                ))}
            </div>
          </div>
          <div className="py-2">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-5 mt-5">
              {schedule[3]?.list &&
                schedule[3].list.map((item) => (
                  <AnimeCard
                    key={item.id}
                    id={item.id}
                    poster={item.posters.original.url}
                    title={item.names.ru}
                    code={item.code}
                    desc={description4}
                    animeCardId={animeCardId}
                    handleChooseAnimeCard={handleChooseAnimeCard}
                    // genres={item.genres}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="py-2">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-5">
            {schedule[4]?.list &&
              schedule[4].list.map((item) => (
                <AnimeCard
                  id={item.id}
                  key={item.id}
                  poster={item.posters.original.url}
                  title={item.names.ru}
                  code={item.code}
                  desc={description5}
                  animeCardId={animeCardId}
                  handleChooseAnimeCard={handleChooseAnimeCard}
                  // genres={item.genres}
                />
              ))}
          </div>
        </div>
        <div className="py-2">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-5 mt-5">
            {schedule[5]?.list &&
              schedule[5].list.map((item) => (
                <AnimeCard
                  id={item.id}
                  key={item.id}
                  poster={item.posters.original.url}
                  title={item.names.ru}
                  code={item.code}
                  desc={description6}
                  animeCardId={animeCardId}
                  handleChooseAnimeCard={handleChooseAnimeCard}
                  // genres={item.genres}
                />
              ))}
          </div>
        </div>
        <div className="py-2">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-5 mt-5">
            {schedule[6]?.list &&
              schedule[6].list.map((item) => (
                <AnimeCard
                  key={item.id}
                  id={item.id}
                  poster={item.posters.original.url}
                  title={item.names.ru}
                  code={item.code}
                  desc={description7}
                  animeCardId={animeCardId}
                  handleChooseAnimeCard={handleChooseAnimeCard}
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
