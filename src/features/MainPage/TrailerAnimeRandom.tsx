import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import trailer from "../../assets/trailer4ksao.webp";

const TrailerAnimeRandom = () => {
  return (
    <>
      <div className="w-full bg-cover z-[-10] mb-20">
        <img
          className="rounded-3xl bottom-14 relative z-[0] w-full h-full bg-custom-gradient brightness-50 [radial-gradient(circle,_rgba(0,_0,_0,_0.235)_0%,_rgba(0,_0,_0,_0.477)_28%,_rgba(0,_0,_0,_0.678)_62%,_rgba(0,_0,_0,_0.863)_87%),_linear-gradient(0deg,_#000,_transparent_40%)]"
          src={trailer}
          alt=""
        />
      </div>
      <div className="">
        <div className="absolute top-80 ml-12">
          <div className="">
            <h1 className="text-7xl font-medium mb-2">
            Мастера Меча Онлайн 2
            </h1>
            <p className="mb-3 text-neutral-300 text-xl">
              Череда загадочных смертей происходит в новой виртуальной VRMMO
              "Призрачная пуля". Игрок, назвавший себя Deathgun, обладает
              способностью убивать игроков в реальной жизни...
            </p>
          </div>
          <button className="bg-zinc-100 hover:bg-zinc-300 text-black font-bold text-sm py-3 px-6 rounded-full flex duration-200">
            <FaPlay className="mt-1 mr-3 text-xs" />

            <Link to={"/titles/sword-art-online-ii"}>Доступно на сайте</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default TrailerAnimeRandom;
