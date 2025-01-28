import { useEffect, useState } from "react";
import { ITitle, TitleList } from "../types/anime.type";
import { api } from "../api";
import { Link, NavLink } from "react-router-dom";
import UpdateCard from "../components/UpdateCard/UpdateCard";
import { TbZoom } from "react-icons/tb";

const SearchMain = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchTitle, setSearchTitle] = useState<ITitle[]>();

  const getSearchTitles = () => {
    // api
    //   .get<TitleList>("/v3/title/search", {
    //     params: {
    //       items_per_page: 18,
    //       search: search,
    //     },
    //   })
    //   .then((response) => {
    //     setSearchTitle(response?.data.list);
    //   });
  };


  useEffect(() => {
    api
      .get<TitleList>("/v3/title/search", {
        params: {
          items_per_page: 15,
          search: search,
        },
      })
      .then((response) => {
        setSearchTitle(response?.data.list);
      });
  }, [getSearchTitles]);

  return (
    <>
      <header className="shadow-x top-0">
        <div className="container py-3 flex items-center justify-around">
          <Link
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent"
          >
            Для вас
          </Link>

          <form
            onClick={(e) => {
              e.preventDefault();
            }}
            className="w-7/12 flex"
          >
            <TbZoom className="text-3xl hidden lg:flex items-center m-3" />
            <div className="w-full">
              <input
                onClick={() => setIsSearchOpen(true)}
                type="text"
                placeholder="Найти аниме"
                className="hidden lg:flex text-white bg-zinc-900 w-full rounded-3xl p-4"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={getSearchTitles}
              className="hidden lg:flex items-center m-2"
            >
              Найти
            </button>
          </form>

          <div className="flex items-center">
            <div className="lg:hidden"></div>
            <nav className="hidden lg:flex gap-x-5 text-xl">
              <NavLink to="/serials">Библиотека</NavLink>
            </nav>
          </div>
        </div>
        {isSearchOpen && searchTitle && searchTitle.length > 0 && (
                <div
                  className="fixed z-50 flex justify-center inset-0 bg-black bg-opacity-50 pt-20"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <div
                    className="bg-neutral-950 max-w-6xl w-full rounded-2xl cursor-pointer truncate"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className="grid grid-cols-6"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      {searchTitle &&
                        searchTitle.map((title) => (
                          <UpdateCard
                            key={title?.id}
                            title={title?.names.ru}
                            code={title?.code || "N/A"}
                            image={title?.posters.original?.url || ""}
                            genres={""}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              )}
      </header>
    </>
  );
};

export default SearchMain;
