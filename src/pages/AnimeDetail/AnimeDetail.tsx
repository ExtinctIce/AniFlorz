import { useEffect, useState } from "react";
import { getTitle } from "../../api";
import { useParams } from "react-router-dom";
import { List } from "../../types/schedule.type";
import ReactPlayer from "react-player";

const AnimeDetail = () => {
  const { code } = useParams();
  const [title, setTitle] = useState<List>();
  const [activeEpisode, setActiveEpisode] = useState<string>("1");
  const [activeQuality, setActiveQuality] = useState<string>("hd");

  const createTitle = async () => {
    const timeoutTitle = code && (await getTitle(code));
    timeoutTitle && setTitle(timeoutTitle);
  };

  useEffect(() => {
    createTitle();
  }, []);

  const handleNextEpisode = () => {
    const totalEpisodes = title?.player?.list?.length || 0;
    const currentEpisodeNumber = parseInt(activeEpisode, 10);
    const nextEpisodeNumber = Math.min(currentEpisodeNumber + 1, totalEpisodes);
    setActiveEpisode(nextEpisodeNumber.toString());
  };
  const handlePrevEpisode = () => {
    const currentEpisodeNumber = parseInt(activeEpisode, 10);
    const prevEpisodeNumber = Math.max(currentEpisodeNumber - 1, 1);
    setActiveEpisode(prevEpisodeNumber.toString());
  };

  // ВЫБОР КАЧЕСТВА ЧЕРЕЗ СВИТЧ

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
  return (
    <div className="container mx-auto p-4 bg-[url('background.jpg')]">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={`https://static-libria.weekstorm.one${title?.posters?.original?.url}`}
          alt=""
          className="w-full md:w-1/2 lg:w-1/3 rounded-lg object-cover"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {title?.names?.ru}
          </h1>
          <div className="flex flex-col gap-2">
            <p className="font-medium">Жанры: {title?.genres?.join(", ")}</p>
          </div>
          <p className="text-base md:text-lg text-gray-500 hidden md:block">
            {title?.description}
          </p>
          {/* <div className="flex flex-col gap-2">
            <p className="font-medium">Жанры: {title?.genres?.join(", ")}</p>
          </div> */}
          <div className="flex gap-4">
            <select
              value={activeEpisode}
              onChange={(e) => setActiveEpisode(e.target.value)}
              className="bg-zinc-600 text-white px-4 py-2 rounded-lg cursor-pointer text-base"
            >
              {title?.player?.list?.map((episode) => (
                <option key={episode.episode} value={episode.episode}>
                  Серия: {episode.episode}
                </option>
              ))}
            </select>
            <select
              value={activeQuality}
              onChange={(e) => setActiveQuality(e.target.value)}
              className="bg-zinc-600 text-white px-4 py-2 rounded-lg cursor-pointer text-base"
            >
              <option value="hd">720p</option>
              <option value="sd">480p</option>
              <option value="fhd">1080p</option>
            </select>
          </div>
          <div className="w-full mt-4">
            {title?.player?.list?.find(
              (ep) => ep.episode === Number(activeEpisode)
            ) && (
              <ReactPlayer
                className="w-full aspect-video rounded-lg"
                controls
                url={`https://cache.libria.fun${getVideoUrl()}`}
              />
            )}
          </div>
          <div className="w-full mt-4 flex justify-between">
            <button
              onClick={handlePrevEpisode}
              className="border 1px border-white rounded-lg hover:bg-gray-700 py-2 px-4 cursor-pointer"
            >
              пред. серия
            </button>
            <button
              onClick={handleNextEpisode}
              disabled={
                parseInt(activeEpisode, 10) >=
                (title?.player?.list?.length || 0)
              }
              className="border 1px border-white rounded-lg hover:bg-gray-700 py-2 px-4 cursor-pointer"
            >
              след. серия
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
