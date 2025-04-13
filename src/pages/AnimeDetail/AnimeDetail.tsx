import { useEffect, useRef, useState } from "react";
import { getTitle } from "../../shared/api";
import { useParams } from "react-router-dom";
import { List } from "../../shared/types/schedule.type";
import ReactPlayer from "react-player";
import SearchMain from "../../widgets/SearchWidgets/SearchMain";
import TitleDetails from "../../widgets/InfoTitleDetails/detailsInfo/TitleDetails";
import EpisodePrewievShared from "../../widgets/InfoTitleDetails/EpisodeShared/EpisodeShared";
import { NextHandleEpisode } from "../../widgets/InfoTitleDetails/NextEpisode/NextEpisode";

const AnimeDetail = () => {
  const { code } = useParams();
  const [title, setTitle] = useState<List>();
  const [activeEpisode, setActiveEpisode] = useState<string>("1");
  const [activeQuality, setActiveQuality] = useState<string>("fhd");
  const playerRef = useRef<ReactPlayer>(null);
  const [skipOpening, setSkipOpening] = useState(false);
  const [isOpeningSkipped, setIsOpeningSkipped] = useState(false);

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

  const handleNextEpisode = () => {
    const totalEpisodes = title?.player?.list?.length || 0;
    const currentEpisodeNumber = parseInt(activeEpisode, 10);
    const nextEpisodeNumber = Math.min(currentEpisodeNumber + 1, totalEpisodes);
    setActiveEpisode(nextEpisodeNumber.toString());
    setSkipOpening(false);
    setIsOpeningSkipped(false);
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

  const getOpeningSkipTimes = () => {
    const episode = title?.player?.list?.find(
      (ep) => ep.episode === Number(activeEpisode)
    );
    return episode?.skips?.opening || [];
  };

  const handleReady = () => {
    if (skipOpening && !isOpeningSkipped) {
      const openingSkipTimes = getOpeningSkipTimes();

      if (openingSkipTimes.length === 2 && playerRef.current) {
        const startTime = openingSkipTimes[0];
        const endTime = openingSkipTimes[1];

        if (
          typeof startTime === "number" &&
          typeof endTime === "number" &&
          !isNaN(startTime) &&
          !isNaN(endTime)
        ) {
          playerRef.current.seekTo(endTime);
          // setIsOpeningSkipped(true);
        } else {
          console.warn("Invalid skip time", openingSkipTimes);
        }
      }
    }
  };

  const getSeasond = () => {
    if (!title?.franchises || title.franchises.length === 0) {
      return (
        <div className="flex">
          <button className="m-1 text-xl font-semibold text-white cursor-pointer hover:text-white border border-neutral-80 focus:ring-4 focus:outline-none focus:neutral-300 rounded-lg px-4 py-2 text-center dark:border-neutral-700 dark:text-neutral-100 dark:hover:text-white dark:focus:ring-neutral-800 hover:bg-neutral-800">
            {title?.names.ru}
          </button>
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
      <SearchMain />

      <div className="">
        <div className="">
          <div className="">
            {title?.player?.list?.find(
              (ep) => ep.episode === Number(activeEpisode)
            ) && (
              <ReactPlayer
                ref={playerRef}
                width="100%"
                height="100%"
                className="w-full aspect-video rounded-lg"
                controls
                autoPlay
                url={`https://cache.libria.fun${getVideoUrl()}`}
                onReady={handleReady}
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
            {!isOpeningSkipped && (
              <button
                className="text-gray-900 border duration-500 transform border-pink-500 focus:neutral-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2 dark:text-neutral-100 cursor-pointer hover:bg-pink-700"
                onClick={() => {
                  setSkipOpening(true);
                  handleReady();
                }}
              >
                Пропустить опенинг
              </button>
            )}
          </div>
          <NextHandleEpisode
            title={title}
            activeEpisode={activeEpisode}
            handleNextEpisode={handleNextEpisode}
          />
        </div>
      </div>

      <EpisodePrewievShared
        title={title}
        activeEpisode={activeEpisode}
        handleEpisodeClick={handleEpisodeClick}
      />

      <TitleDetails title={title} getSeasond={getSeasond} />
    </div>
  );
};

export default AnimeDetail;
