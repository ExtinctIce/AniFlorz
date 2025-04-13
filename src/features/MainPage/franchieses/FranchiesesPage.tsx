import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { KodikPlayer } from "../KodikPlayer/KodikPlayer";
import { observer } from "mobx-react-lite";
import franchiesesStoreApi from "../../../shared/store/stores-api-main/franchieses-store-api";

export const FranchiesesPage = observer((props: any) => {
  const { franchises, getFranchieses } = franchiesesStoreApi;

  useEffect(() => {
    getFranchieses();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      <div className="mx-auto px-4 py-3 ">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {franchises.slice(0, 15).map((item) => (
            <motion.div
              key={item.id}
              variants={cardAnimation}
              className="bg-neutral-900 rounded-lg overflow-hidden hover:bg-neutral-800 transition-all scale-105 duration-200 cursor-pointer"
            >
              {/* Изображение */}
              <Link to={`/titles/${props.code}`}>
                <div className="relative">
                  <img
                    src={`https://static-libria.weekstorm.one${item.image.preview}`}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  {item.rating && (
                    <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {item.rating.toFixed(1)}
                    </div>
                  )}
                </div>
              </Link>

              {/* Информация */}
              <div className="p-3">
                <h3 className="text-white font-medium mb-1 line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-2 line-clamp-1">
                  {item.name_english}
                </p>

                <div className="flex justify-between text-xs text-gray-500">
                  <span>{item.last_year}</span>
                  <div className="flex gap-2">
                    <span>{item.total_releases} сез.</span>
                    <span>{item.total_episodes} эп.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <KodikPlayer
        titleInfo={{
          id: props.id,
          code: props.code,
          episode: 1,
          translation: "false",
        }}
      />
    </>
  );
});
