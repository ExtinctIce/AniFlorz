import { useEffect } from "react";
import { FaCommentAlt, FaPlay } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import videoContent from "../../../shared/store/stores-api-main/videoContent-store-api";

export const AnimeCommunity = observer(() => {
  const { makeVideoContent, mediaYoutube } = videoContent;

  useEffect(() => {
    makeVideoContent();
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
      <div className="mx-auto px-4 py-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {mediaYoutube.slice(3, 10).map((item) => (
            <motion.div
              key={item.id}
              variants={cardAnimation}
              className="group bg-neutral-900 rounded-xl overflow-hidden cursor-pointer hover:bg-neutral-800 transition-colors duration-200"
            >
              {/* Изображение с оверлеем */}
              <div className="relative aspect-video">
                <img
                  src={`https://static-libria.weekstorm.one${item.image.preview}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Кнопка воспроизведения */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40">
                  <button
                    onClick={() => window.open(item.url, "_blank")}
                    className="flex items-center gap-2 bg-neutral-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors duration-200"
                  >
                    <FaPlay className="w-4 h-4" />
                    <span>Смотреть</span>
                  </button>
                </div>
              </div>

              {/* Информация */}
              <div className="p-4">
                <h3 className="text-white font-medium mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Создатель: {item.origin.title}
                </p>

                {/* Статистика */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <IoEye className="w-4 h-4" />
                    <span>{item.views} просмотров</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCommentAlt className="w-4 h-4" />
                    <span>{item.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
});
