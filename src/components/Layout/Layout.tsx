import { useState } from "react";
import { TbZoom } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom";
import { api } from "../../api";
import { ITitle, TitleList } from "../../types/anime.type";
import UpdateCard from "../UpdateCard/UpdateCard";

const Layout = () => {
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
              {isSearchOpen && searchTitle && searchTitle.length > 0 && (
                <div
                  className="fixed inset-20 z-50 flex justify-center whitespace-break-spaces"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <div
                    className="bg-zinc-800 rounded-lg p-2 relative max-w-xl w-full cursor-pointer truncate block"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className="grid grid-cols-2 md:grid-cols-4 justify-items-center z-[1]"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      {searchTitle &&
                        searchTitle.map((title) => (
                          <UpdateCard
                            key={title?.id}
                            title={title?.names.ru}
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
            <div className="lg:hidden"></div>
            <nav className="hidden lg:flex gap-x-5 text-xl">
              <NavLink to="/serials">Библиотека</NavLink>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />

      <footer className="flex justify-center bg-neutral-900">xd</footer>
    </>
  );
};

export default Layout;
