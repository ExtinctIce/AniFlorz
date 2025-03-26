import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import trailer from "../../assets/arise.mp4";
import { useState } from "react";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";

const TrailerAnimeRandom = () => {
  const [muted, setMuted] = useState(true);

  const toggleMuted = () => {
    setMuted(!muted);
  };
  return (
    <>
      <div className="w-full bg-cover z-[-10]">
        <video
          className="rounded-3xl bottom-14 relative z-[0] w-full h-full bg-custom-gradient brightness-50 [radial-gradient(circle,_rgba(0,_0,_0,_0.235)_0%,_rgba(0,_0,_0,_0.477)_28%,_rgba(0,_0,_0,_0.678)_62%,_rgba(0,_0,_0,_0.863)_87%),_linear-gradient(0deg,_#000,_transparent_40%)]"
          src={trailer}
          autoPlay
          loop
          muted={muted}
        />
        <div className="absolute inset-0 rounded-3xl custom-overlay"></div>
      </div>
      
      <div className="">
        <div className="absolute top-80 ml-12">
          <div className="">
            <h1 className="text-7xl font-medium mb-2">
              Поднятие уровня в одиночку 2: Восстаньте из тени
            </h1>
            <p className="mb-3 text-neutral-300 text-xl">
              По всему миру без конца появляются врата, из которых на улицы
              городов лезут страшные чудовища. Защищают же человечество так
              называемые охотники — люди, наделённые особыми сверхъестественными
              силами. И наш герой Сон Джин Ву — слабейший из всех охотников в
              мире...
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-zinc-100 hover:bg-zinc-300 text-black font-bold text-sm py-3 px-6 rounded-full flex duration-200">
              <FaPlay className="mt-1 mr-3 text-xs" />
              <Link
                to={
                  "/titles/ore-dake-level-up-na-ken-season-2-arise-from-the-shadow"
                }
              >
                Доступно на сайте
              </Link>
            </button>
            <button className="bg-neutral-800 hover:bg-neutral-900 text-zinc-100 font-bold text-sm py-3 px-6 rounded-full hover:scale-105 flex duration-300">
              <Link
                to={
                  "/titles/ore-dake-level-up-na-ken-season-2-arise-from-the-shadow"
                }
              >
                Подробнее
              </Link>
            </button>
            <div className="bg-neutral-800 rounded-full flex p-1 opacity-70 hover:scale-110 duration-200">
              <button onClick={toggleMuted} className="text-4xl">
                {muted ? (
                  <IoMdVolumeOff className="transition duration-200" />
                ) : (
                  <IoMdVolumeHigh className="transition duration-200" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrailerAnimeRandom;
