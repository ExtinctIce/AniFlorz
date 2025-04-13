const EpisodePrewievShared = (props: any) => {
  return (
    <div className="grid lg:grid-cols-12 gap-2 ml-5 mr-3 mt-4 rounded-2xl p-2">
      {props.title?.player?.list?.map((episode: any) => (
        <div
          key={episode.episode}
          className={`relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-500
                        ${
                          props.activeEpisode === String(episode.episode)
                            ? "scale-110 shadow-md shadow-pink-900"
                            : "hover:shadow-lg hover:shadow-pink-800 hover:scale-105 duration-500 transform"
                        }`}
          onClick={() => props.handleEpisodeClick(String(episode.episode))}
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

          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm p-1 rounded-b-lg">
            Серия {episode.episode}: {episode.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodePrewievShared;
