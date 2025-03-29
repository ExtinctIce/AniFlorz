// import { useCallback, useEffect, useMemo, useState } from "react";
// import { ITitle, TitleList } from "../types/anime.type";
// import { api } from "../api";
import { Link } from "react-router-dom";
import Searcher from "../../features/Searcher";

const SearchMain = () => {
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const [search, setSearch] = useState("");
  // const [searchTitle, setSearchTitle] = useState<ITitle[]>();

  // // дебаунс для запроса, такой вот способ для высокой производительности ;)
  // const debounce = (fn: Function, ms = 300) => {
  //   let timeoutId: ReturnType<typeof setTimeout>;
  //   return function (this: any, ...args: any[]) {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => fn.apply(this, args), ms);
  //   };
  // };

  // const getSearchTitles = useCallback(async () => {
  //   if (!search) {
  //     setSearchTitle([]);
  //     return;
  //   }
  //   try {
  //     const response = await api.get<TitleList>("/v3/title/search", {
  //       params: {
  //         items_per_page: 12,
  //         search: search,
  //       },
  //     });
  //     setSearchTitle(response?.data.list || []);
  //   } catch (error) {}
  // }, [search]);

  // const debouncedSearch = useMemo(
  //   () => debounce(getSearchTitles, 300),
  //   [getSearchTitles]
  // );

  // useEffect(() => {
  //   debouncedSearch();
  // }, [debouncedSearch]);

  return (
    <>
      <header className="shadow-x top-0">
        <div className="container flex items-center justify-between">
          <Link
            to="/"
            className="z-30 text-3xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent"
          >
            Для вас
          </Link>

          <div className="flex items-center z-30 justify-center">
            <Searcher />

            <div className="lg:hidden"></div>
            <button className="py-2 px-8 font-semibold border border-pink-800 bg-pink-600 shadow rounded-3xl hover:scale-105 duration-200 transform">
              Premium
            </button>
            <Link to="/login">
              <button className="py-2 px-8 font-semibold border border-neutral-800 ml-3 bg-neutral-800 shadow rounded-3xl hover:bg-neutral-700 duration-200">
                Войти
              </button>
            </Link>
          </div>
        </div>
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
