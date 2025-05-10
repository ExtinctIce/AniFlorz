import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import genresStoreApi from "../../../shared/store/stores-api-main/genres-store-api/genres-on-page-main-store";
import { Link } from "react-router-dom";

export const GenresItem = observer(() => {
  const { genres, getGenresApi } = genresStoreApi;

  useEffect(() => {
    getGenresApi();
  }, []);

  return (
    <>
      <div>
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-4 mt-3 ml-2">
          {genres.slice(0, 9).map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
           
              <Link to={`/genres/${item.id}`}>
                <div className="relative aspect-[2/3]">
                  <img
                    src={`https://static-libria.weekstorm.one${item.image.preview}`}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

              
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-lg font-semibold mb-1">
                        {item.total_releases} релизов
                      </h3>
                      <p className="text-gray-300 text-sm">релизов</p>
                    </div>
                  </div>

             
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 backdrop-blur-sm">
                    <h3 className="text-white text-sm font-medium truncate">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
