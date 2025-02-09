// import { useEffect, useState } from "react";
// import { getSchedule } from "../../api";
// import { IScheduleArray } from "../../types/schedule.type";
// import AnimeCard from "../../components/AnimeCard/AnimeCard";
// import TrailerAnimeRandom from "../../features/MainPage/TrailerAnimeRandom";

// const HomePage = () => {
//   const [dailyArray, setDailyArray] = useState<string[] | null>(null);

//   useEffect(() => {
//     const lastOutputTime = localStorage.getItem("lastArrayOutputTime");
//     const now = Date.now();
//     const twentyFourHours = 24 * 60 * 60 * 1000;

//     if (
//       !lastOutputTime ||
//       now - parseInt(lastOutputTime, 10) > twentyFourHours
//     ) {
//       localStorage.setItem("lastArrayOutputTime", now.toString());
//     } else {
//       setDailyArray(null);
//     }
//   }, []);

//   const [schedule, setSchedule] = useState<IScheduleArray>([]);
//   const [animeCardId, setAnimeCardId] = useState<number>(0);

//   const createSchedule = async () => {
//     const timeOutSchedule = await getSchedule();
//     setSchedule(timeOutSchedule);
//   };

//   useEffect(() => {
//     createSchedule();
//   }, []);

//   const handleChooseAnimeCard = (id: number, type: string) => {
//     if (type === "show") setAnimeCardId(id);
//     if (type === "delete") setAnimeCardId(0);
//   };

//   const getDescription = (scheduleIndex: number): string | undefined => {
//     if (schedule && schedule[scheduleIndex] && schedule[scheduleIndex].list) {
//       const descCard = schedule[scheduleIndex].list.find(
//         (card) => card.id === animeCardId
//       );
//       return descCard?.description;
//     }
//     return undefined;
//   };

//   return (
//     <>
//       <TrailerAnimeRandom />
//       <div>
//         <div className="py-2 absolute top-3/4">
//           <h1 className="ml-5 text-3xl font-semibold z-[1]">Выходят сейчас</h1>
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-10 gap-5 mt-6 ml-2">
//             {schedule[0]?.list &&
//               schedule[0].list.map((item) => {
//                 const description = getDescription(5);
//                 return (
//                   <AnimeCard
//                     id={item.id}
//                     key={item.id}
//                     poster={item.posters.original.url}
//                     title={item.names.ru}
//                     code={item.code}
//                     desc={description}
//                     animeCardId={animeCardId}
//                     handleChooseAnimeCard={handleChooseAnimeCard}
//                   />
//                 );
//               })}
//           </div>
//         </div>
//         <div className="py-2">
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-10 gap-5 mt-6 ml-2">
//             {schedule[1]?.list &&
//               schedule[1].list.map((item) => {
//                 const description = getDescription(1);
//                 return (
//                   <AnimeCard
//                     id={item.id}
//                     key={item.id}
//                     poster={item.posters.original.url}
//                     title={item.names.ru}
//                     code={item.code}
//                     desc={description}
//                     animeCardId={animeCardId}
//                     handleChooseAnimeCard={handleChooseAnimeCard}
//                   />
//                 );
//               })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;

import { useEffect, useState } from "react";
import { getSchedule } from "../../api";
import { IScheduleArray } from "../../types/schedule.type";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import TrailerAnimeRandom from "../../features/MainPage/TrailerAnimeRandom";
import AnimeCategoryAll from "../../features/MainPage/AnimeCategoryAll";
import Integration from "../../shared/IntegrationMain";
import SearchMain from "../../widgets/SearchMain";

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
      <footer className="flex justify-center bg-black text-black">@ExtinctHaze</footer>
    </>
  );
};

export default HomePage;
