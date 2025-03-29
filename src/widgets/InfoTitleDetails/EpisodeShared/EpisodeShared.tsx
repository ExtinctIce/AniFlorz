// const EpisodeList = ({ episodes, activeEpisode, handleEpisodeClick }) => {
//     return (
//       <div className="grid lg:grid-cols-12 gap-2 ml-5 mr-3 mt-4 rounded-2xl p-2">
//         {episodes?.map((episode) => (
//           <div
//             key={episode.episode}
//             className={`relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300
//                         ${
//                           activeEpisode === String(episode.episode)
//                             ? "scale-105 shadow-md shadow-neutral-800"
//                             : "hover:shadow-lg hover:shadow-neutral-800"
//                         }`}
//             onClick={() => handleEpisodeClick(String(episode.episode))}
//             style={{
//               gridColumn: "span 1", // Адаптация для мобильных
//             }}
//           >
//             {/* Обложка эпизода */}
//             <img
//               src={episode.preview}
//               alt={`Обложка серии ${episode.episode}: ${episode.name}`}
//               className="w-full h-auto object-cover rounded-lg"
//               style={{
//                 aspectRatio: "16/9", // Поддерживаем соотношение сторон
//               }}
//             />

//             {/* Подпись серии */}
//             <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm p-2 rounded-b-lg">
//               Серия {episode.episode}: {episode.name}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };