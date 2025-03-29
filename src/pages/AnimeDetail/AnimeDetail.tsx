import { useEffect, useState } from "react";
import { getTitle } from "../../api";
import { useParams } from "react-router-dom";
import { List } from "../../types/schedule.type";
import ReactPlayer from "react-player";
import SearchMain from "../../widgets/SearchWidgets/SearchMain";
import TitleDetails from "../../widgets/InfoTitleDetails/detailsInfo/TitleDetails";
// import { EpisodeList } from "../../widgets/InfoTitleDetails/EpisodeShared/EpisodeShared";

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
      <SearchMain />

      <div className="">
        <div className="">
          <div className="">
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

      <div className="grid lg:grid-cols-12 gap-2 ml-5 mr-3 mt-4 rounded-2xl p-2">
        {title?.player?.list?.map((episode: any) => (
          <div
            key={episode.episode}
            className={`relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300
                        ${
                          activeEpisode === String(episode.episode)
                            ? "scale-110 shadow-md shadow-neutral-700"
                            : "hover:shadow-lg hover:shadow-neutral-700"
                        }`}
            onClick={() => handleEpisodeClick(String(episode.episode))}
            style={{
              gridColumn: "span 1",
            }}
          >
            <img
              src={`https://static-libria.weekstorm.one${episode.preview}`}
              className="w-full h-auto object-cover rounded-lg"
              style={{
                aspectRatio: "16/9",
              }}
            />

            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm p-2 rounded-b-lg">
              Серия {episode.episode}: {episode.name}
            </div>
          </div>
        ))}
      </div>

      {/* <button className="">{title?.player?.list[0].skips.opening[0]}</button> */}
      <TitleDetails title={title} getSeasond={getSeasond} />
    </div>
  );
};

export default AnimeDetail;
