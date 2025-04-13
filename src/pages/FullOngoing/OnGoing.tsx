import { useEffect, useState } from "react";
import { getSchedule } from "../../shared/api";
import { IScheduleArray } from "../../shared/types/schedule.type";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import SearchMain from "../../widgets/SearchWidgets/SearchMain";

const OnGoing = () => {
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
    if (type === "show") setAnimeCardId(id);
    if (type === "delete") setAnimeCardId(0);
  };

  const descCardId = schedule[0]?.list.find((card) => card.id === animeCardId);
  const description = descCardId?.description;

  const descCardId1 = schedule[1]?.list.find((card) => card.id === animeCardId);
  const description1 = descCardId1?.description;

  const descCardId2 = schedule[6]?.list.find((card) => card.id === animeCardId);
  const description2 = descCardId2?.description;

  const descCardId3 = schedule[2]?.list.find((card) => card.id === animeCardId);
  const description3 = descCardId3?.description;

  const descCardId4 = schedule[3]?.list.find((card) => card.id === animeCardId);
  const description4 = descCardId4?.description;

  const descCardId5 = schedule[4]?.list.find((card) => card.id === animeCardId);
  const description5 = descCardId5?.description;

  const descCardId6 = schedule[5]?.list.find((card) => card.id === animeCardId);
  const description6 = descCardId6?.description;

  return (
    <>
      <SearchMain />

      <div>
        <div className="py-2">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 mt-6 ml-2">
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
                />
              ))}
          </div>
        </div>
      </div>

      <div>
        <div className="mt-1">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-5 z-100 ml-2">
            {schedule[1]?.list &&
              schedule[1].list.map((item) => (
                <AnimeCard
                  id={item.id}
                  key={item.id}
                  poster={item.posters.original.url}
                  title={item.names.ru}
                  code={item.code}
                  desc={description1}
                  animeCardId={animeCardId}
                  handleChooseAnimeCard={handleChooseAnimeCard}
                />
              ))}
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-5 mt-5 z-100 ml-2">
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
                />
              ))}
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-5 mt-5 ml-2">
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
                />
              ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-5 ml-2">
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
              />
            ))}
        </div>
      </div>
      <div className="">
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
              />
            ))}
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-5 mt-5 ml-2">
          {schedule[6]?.list &&
            schedule[6].list.map((item) => (
              <AnimeCard
                key={item.id}
                id={item.id}
                poster={item.posters.original.url}
                title={item.names.ru}
                code={item.code}
                desc={description2}
                animeCardId={animeCardId}
                handleChooseAnimeCard={handleChooseAnimeCard}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default OnGoing;
