import { observer } from "mobx-react-lite";
import genresAllStore from "../../shared/store/stores-api-main/genres-store-api/genres-all-store";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const AllGenresView = observer(() => {
  const { allGenresRender, allGenres } = genresAllStore;

  useEffect(() => {
    allGenresRender();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-12">Все жанры</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {allGenres.map((item) => (
            <Link
              to={`/genres/${item.id}`}
              key={item.id}
              className="group bg-neutral-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-neutral-700/50 hover:border-neutral-600/50"
            >
              <div className="relative pb-[150%]">
                {item.image?.preview && (
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                    src={`https://static-libria.weekstorm.one${item.image.preview}`}
                    alt={item.name}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h2 className="text-white font-medium truncate group-hover:text-neutral-400 transition-colors duration-300">
                  {item.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});
