import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TbZoom } from "react-icons/tb";
import { ITitle, TitleList } from "../types/anime.type";
import { api } from "../api";
import UpdateCard from "../components/UpdateCard/UpdateCard";

const Searcher = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchTitle, setSearchTitle] = useState<ITitle[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

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
    } catch (error) {
      console.error("Ошибка при поиске:", error); // Добавил логирование ошибки
    }
  }, [search]);

  const debouncedSearch = useMemo(
    () => debounce(getSearchTitles, 300),
    [getSearchTitles]
  );

  useEffect(() => {
    debouncedSearch();
  }, [debouncedSearch]);

  const handleSearchIconClick = () => {
    setIsSearchOpen(true);
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <>
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
        className="w-7/12 flex z-30"
      >
        <div className="bg-neutral-800 flex justify-center items-center p-2 rounded-full opacity-65 mt-1 mr-4">
          <TbZoom
            onClick={handleSearchIconClick}
            className="text-4xl hidden lg:flex items-center hover:scale-110 duration-200 cursor-pointer bg-neutral-800 rounded-full opacity-90"
          />
        </div>
      </form>

      {isSearchOpen && (
        <div
          onClick={() => setIsSearchOpen(false)}
          className="fixed z-40 flex justify-center inset-0 bg-black bg-opacity-50 "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral-950 rounded-2xl p-5 w-full max-w-4xl"
          >
            <div className="flex items-center mb-4">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Найти аниме"
                className="text-white bg-zinc-900 w-full rounded-3xl p-4 mr-4"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {searchTitle && searchTitle.length > 0 ? (
              <div className="grid lg:grid-cols-4 gap-2 column">
                {searchTitle.map((title) => (
                  <UpdateCard
                    key={title?.id}
                    title={title?.names.ru}
                    code={title?.code || "N/A"}
                    image={title?.posters.original?.url || ""}
                  />
                ))}
              </div>
            ) : (
              <p className="text-white">
                {search ? "Ничего не найдено" : "Введите запрос для поиска"}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Searcher;

// const Searcher = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [searchTitle, setSearchTitle] = useState<ITitle[]>();

//   const debounce = (fn: Function, ms = 300) => {
//     let timeoutId: ReturnType<typeof setTimeout>;
//     return function (this: any, ...args: any[]) {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => fn.apply(this, args), ms);
//     };
//   };

//   const getSearchTitles = useCallback(async () => {
//     if (!search) {
//       setSearchTitle([]);
//       return;
//     }
//     try {
//       const response = await api.get<TitleList>("/v3/title/search", {
//         params: {
//           items_per_page: 12,
//           search: search,
//         },
//       });
//       setSearchTitle(response?.data.list || []);
//     } catch (error) {}
//   }, [search]);

//   const debouncedSearch = useMemo(
//     () => debounce(getSearchTitles, 300),
//     [getSearchTitles]
//   );

//   useEffect(() => {
//     debouncedSearch();
//   }, [debouncedSearch]);

//   return (
//     <>
//       <form
//         onClick={(e) => {
//           e.preventDefault();
//         }}
//         className="w-7/12 flex z-30"
//       >
//         <TbZoom
//           onClick={() => setIsSearchOpen(true)}
//           className="text-4xl p-1 hidden lg:flex items-center mr-2 hover:scale-110 duration-200 cursor-pointer mt-3 bg-neutral-800 rounded-full opacity-70"
//         />
//         <div className="w-full">
//           <input
//             onClick={() => setIsSearchOpen(true)}
//             type="text"
//             placeholder="Найти аниме"
//             className="hidden lg:flex text-white bg-zinc-900 w-full rounded-3xl p-4"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//       </form>
//       {isSearchOpen && searchTitle && searchTitle.length > 0 && (
//         <div
//           className="fixed z-50 flex justify-center inset-0 bg-black bg-opacity-50 py-14"
//           onClick={() => setIsSearchOpen(false)}
//         >
//           <div
//             className="bg-neutral-950 max-w-6xl max-h-screen w-full rounded-2xl cursor-pointer truncate"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div
//               className="grid grid-cols-6"
//               onClick={() => setIsSearchOpen(false)}
//             >
//               {searchTitle &&
//                 searchTitle.map((title) => (
//                   <UpdateCard
//                     key={title?.id}
//                     title={title?.names.ru}
//                     code={title?.code || "N/A"}
//                     image={title?.posters.original?.url || ""}
//                   />
//                 ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Searcher;
