import { useState } from "react";
import { HiBars3BottomLeft, HiXMark } from "react-icons/hi2";
import { TbZoom } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom";
import { api } from "../../api";
import { ITitle, TitleList } from "../../types/anime.type";
import UpdateCard from "../UpdateCard/UpdateCard";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchTitle, setSearchTitle] = useState<ITitle[]>();

  const getSearchTitles = () => {
    api
      .get<TitleList>("/v3/title/search", {
        params: {
          items_per_page: 8,
          search: search,
        },
      })
      .then((response) => {
        console.log(response.data);
        setSearchTitle(response?.data.list);
      });
  };

  return (
    <>
      <header className="shadow-x sticky top-0 z-50 bg-neutral-900">
        <div className="container py-5 flex items-center justify-between">
          <Link
            to="/AniFlorz"
            className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent"
          >
            AniFlorz
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
                className="hidden lg:flex text-white pr-4 bg-zinc-800 w-full rounded-3xl p-4"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {isSearchOpen && searchTitle && searchTitle.length > 0 && (
                <div
                  className="fixed inset-20 z-50 flex justify-center w-10/12"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <div
                    className="bg-zinc-800 rounded-lg shadow-lg p-2 relative max-w-xl w-full cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className="container grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      {searchTitle &&
                        searchTitle.map((title) => (
                          <UpdateCard
                            key={title?.id}
                            title={title?.names.ru || "N/A"}
                            code={title?.code || "N/A"}
                            genres={title?.genres.join(", ") || "N/A"}
                            image={title?.posters.original?.url || ""}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={getSearchTitles}
              className="hidden lg:flex items-center m-2"
            >
              Найти
            </button>
          </form>

          <div className="flex items-center">
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <HiXMark className="text-3xl cursor-pointer" />
                ) : (
                  <HiBars3BottomLeft className="text-3xl cursor-pointer" />
                )}
              </button>
            </div>
            <nav className="hidden lg:flex gap-x-5 text-xl">
              <NavLink to="/serials">Рекомендованные</NavLink>
              <NavLink to="/AniFlorzUpd">Обновления</NavLink>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="flex justify-center bg-neutral-700"></footer>

      {isMenuOpen && (
        <div className="fixed inset-0 backdrop-blur-sm z-50">
          <div className="w-64 shadow-lg">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              <HiBars3BottomLeft className="text-3xl cursor-pointer" />
            </button>
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              className="text-xl mr-10"
              to="/serials"
            >
              Все тайтлы
            </NavLink>
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              className="text-xl"
              to="/AniFlorzUpd"
            >
              Обновления
            </NavLink>
          </div>
          <form
            onClick={(e) => {
              e.preventDefault();
            }}
            className="flex w-full py-8"
          >
            <TbZoom className="text-3xl items-center m-2 cursor-pointer" />
            <input
              type="text"
              placeholder="Поиск тайтла"
              className="w-full p-2 text-white bg-zinc-800 rounded-3xl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={getSearchTitles}
              className="items-center p-2 py-3 m-1 bg-black rounded-lg"
            >
              Найти
            </button>
          </form>
          <div
            className="container grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center"
            onClick={() => setIsSearchOpen(false)}
          >
            {searchTitle &&
              searchTitle.map((title) => (
                <UpdateCard
                  key={title?.id}
                  title={title?.names.ru || "N/A"}
                  code={title?.code || "N/A"}
                  genres={title?.genres.join(", ") || "N/A"}
                  image={title?.posters.original?.url || ""}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
