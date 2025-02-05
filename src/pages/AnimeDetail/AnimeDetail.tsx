import { useEffect, useState } from "react";
import { getTitle } from "../../api";
import { useParams } from "react-router-dom";
import { List } from "../../types/schedule.type";
import ReactPlayer from "react-player";

const AnimeDetail = () => {
  const { code } = useParams();
  const [title, setTitle] = useState<List>();
  const [activeEpisode, setActiveEpisode] = useState<string>("1");
  const [activeQuality, setActiveQuality] = useState<string>("fhd");

  const createTitle = async () => {
    const timeoutTitle = code && (await getTitle(code));
    timeoutTitle && setTitle(timeoutTitle);
  };

  const handleEpisodeClick = (episode: string) => {
    setActiveEpisode(episode);
  };

  useEffect(() => {
    createTitle();
  }, [code]);

  console.log(title);
  const handleNextEpisode = () => {
    const totalEpisodes = title?.player?.list?.length || 0;
    const currentEpisodeNumber = parseInt(activeEpisode, 10);
    const nextEpisodeNumber = Math.min(currentEpisodeNumber + 1, totalEpisodes);
    setActiveEpisode(nextEpisodeNumber.toString());
  };

  const getVideoUrl = () => {
    const episode = title?.player?.list?.find(
      (ep) => ep.episode === Number(activeEpisode)
    );
    if (!episode) return "";

    switch (activeQuality) {
      case "sd":
        return episode.hls.sd;
      case "hd":
        return episode.hls.hd;
      case "fhd":
        return episode.hls.fhd;
      default:
        return episode.hls.hd;
    }
  };

  const getSeasond = () => {
    if (!title?.franchises || title.franchises.length === 0) {
      return (
        <div className="flex">
          <button className="m-1 text-xl font-semibold text-white cursor-pointer hover:text-white border border-neutral-80 focus:ring-4 focus:outline-none focus:neutral-300 rounded-lg px-4 py-2 text-center dark:border-neutral-700 dark:text-neutral-100 dark:hover:text-white dark:focus:ring-neutral-800 hover:bg-neutral-800">
            {title?.names.ru}
          </button>
          <p className="text-xl font-medium mt-3">
            {" "}
            - Кажется тут лишь 1 сезон. Ждем его онгоинга вместе c AniFlorz! (;
          </p>
        </div>
      );
    }
    const releases = title.franchises[0].releases;

    return (
      <div className="gap-2">
        {releases.map((release) => (
          <button
            className="m-1 text-xl font-semibold text-white cursor-pointer hover:text-white border border-neutral-80 focus:ring-4 focus:outline-none focus:neutral-300 rounded-lg px-4 py-2 text-center dark:border-neutral-700 dark:text-neutral-100 dark:hover:text-white dark:focus:ring-neutral-800 hover:bg-neutral-800"
            key={release.id}
          >
            {release.names.ru}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="mt-2">
            {title?.player?.list?.find(
              (ep) => ep.episode === Number(activeEpisode)
            ) && (
              <ReactPlayer
                getCurrentSeasonName
                width="100%"
                height="100%"
                className="w-full aspect-video rounded-lg"
                controls
                autoPlay
                url={`https://cache.libria.fun${getVideoUrl()}`}
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold w-full ml-3 mb-2">
          {title?.names?.ru}
        </h1>
        <div className="w-full mt-3 flex justify-end">
          <div className="flex gap-4">
            <select
              value={activeQuality}
              onChange={(e) => setActiveQuality(e.target.value)}
              className="bg-neutral-950 text-neutral-100 rounded-xl cursor-pointer mr-5 pr-3 pl-3"
            >
              <option value="hd">720p</option>
              <option value="sd">480p</option>
              <option value="fhd">1080p</option>
            </select>
          </div>

          <div className="flex items-center mr-10">
            {/* <BsFillGearFill
            // onClick={renderQuality}
            className="mb-3 mr-5 text-xl cursor-pointer"
          /> */}

            <button
              onClick={handleNextEpisode}
              disabled={
                parseInt(activeEpisode, 10) >=
                (title?.player?.list?.length || 0)
              }
              className="text-gray-900 hover:text-white border border-neutral-80 focus:ring-4 focus:outline-none focus:neutral-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2 dark:border-neutral-700 dark:text-neutral-100 dark:hover:text-white dark:focus:ring-neutral-800 cursor-pointer hover:bg-neutral-800"
            >
              след. серия
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-2 ml-5 mr-3 mt-4 border 1px rounded-2xl border-neutral-800 p-2">
        {title?.player?.list?.map((episode) => (
          <div
            key={episode.episode}
            className={`bg-neutral-900 rounded-lg px-4 py-2 text-white hover:bg-neutral-800 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-neutral-800 ${
              activeEpisode === String(episode.episode) ? "bg-neutral-900" : ""
            }`}
            onClick={() => handleEpisodeClick(String(episode.episode))}
          >
            Серия: {episode.episode}
          </div>
        ))}
      </div>

      {/* <button className="">{title?.player?.list[0].skips.opening[0]}</button> */}

      <div className="flex md:flex-row gap-8 mt-4 ml-5 mr-4 border 1px rounded-2xl border-neutral-800 pt-2 pb-2 pr-2 ">
        <img
          src={`https://static-libria.weekstorm.one${title?.posters?.small?.url}`}
          alt=""
          className="rounded-lg object-cover ml-2"
        />
        <div className="flex flex-1">
          <div className="inline-block max-h-[850px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <p className="font-medium text-xl">
              Жанры: {title?.genres?.join(", ")}
            </p>
          </div>
          <p className="text-base md:text-lg text-neutral-600 hidden md:block">
            {title?.description}
          </p>
          <hr className="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <div className="text-xl semibold font-semibold">
            Информация об аниме - {title?.type.full_string}
          </div>
          <div className="text-xl font-sans">
            Год выхода - {title?.season.year}
          </div>
          <div className="text-xl font-sans">
            Количество эпизодов - {title?.type.episodes}
          </div>
          <div className="text-xl font-sans">
            Статус - {title?.status.string}
          </div>
          <div className="text-xl font-sans">
            Аниме - {title?.season.string}
          </div>

          <div className="border 1px rounded-2xl border-neutral-800 p-1 w-5/6">
            <div>
              <p className="text-xl ml-1">Все сезоны этого аниме</p>
              <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            </div>
            <div className="flex">{title?.franchises && getSeasond()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
