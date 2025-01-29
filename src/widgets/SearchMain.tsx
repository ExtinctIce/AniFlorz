import { useCallback, useEffect, useMemo, useState } from "react";
import { ITitle, TitleList } from "../types/anime.type";
import { api } from "../api";
import { Link, NavLink } from "react-router-dom";
import UpdateCard from "../components/UpdateCard/UpdateCard";
import { TbZoom } from "react-icons/tb";

const SearchMain = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchTitle, setSearchTitle] = useState<ITitle[]>();

  // дебаунс для запроса, такой вот способ для высокой производительности ;)
  const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  const getSearchTitles = useCallback(async () => {
    if (!search) {
      setSearchTitle([]);
      return;
    }
    try {
      const response = await api.get<TitleList>("/v3/title/search", {
        params: {
          items_per_page: 12,
          search: search,
        },
      });
      setSearchTitle(response?.data.list || []);
    } catch (error) {}
  }, [search]);

  const debouncedSearch = useMemo(
    () => debounce(getSearchTitles, 300),
    [getSearchTitles]
  );

  useEffect(() => {
    debouncedSearch();
  }, [debouncedSearch]);

  return (
    <>
      <header className="shadow-x top-0 bg-neutral-950">
        <div className="container flex items-center justify-around">
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
            className="fixed z-50 flex justify-center inset-0 bg-black bg-opacity-50 py-14"
            onClick={() => setIsSearchOpen(false)}
          >
            <div
              className="bg-neutral-950 max-w-6xl max-h-screen w-full rounded-2xl cursor-pointer truncate"
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

// const getSearchTitles = () => {
//   // api
//   //   .get<TitleList>("/v3/title/search", {
//   //     params: {
//   //       items_per_page: 12,
//   //       search: search,
//   //     },
//   //   })
//   //   .then((response) => {
//   //     console.log(response.data);
//   //     setSearchTitle(response?.data.list);
//   //   });
// };

// useEffect(() => {
//   api
//     .get<TitleList>("/v3/title/search", {
//       params: {
//         items_per_page: 12,
//         search: search,
//       },
//     })
//     .then((response) => {
//       console.log(response.data);
//       setSearchTitle(response?.data.list);
//     });
// }, [getSearchTitles]);
// const debounce = (func: (...args: any[]) => void, delay: number) => {
//   let timeoutId: NodeJS.Timeout;
//   return (...args: any[]) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func(...args), delay);
//   };
// };
