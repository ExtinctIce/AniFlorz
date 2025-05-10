import { Link } from "react-router-dom";
import Searcher from "../../features/Searcher";
import { observer } from "mobx-react-lite";
import { storeAuth } from "../../shared/store/store-auth/store-auth";
import { useEffect } from "react";

const SearchMain = observer(() => {
  const isAuth = storeAuth.getIsAuth();
  const userData = storeAuth.getUserData();

  useEffect(() => {
    // Проверяем наличие данных в localStorage при монтировании
    const savedToken = localStorage.getItem("auth_token");
    const savedUserData = localStorage.getItem("user_data");
    const savedIsAuth = localStorage.getItem("isAuth") === "true";

    if (savedToken && savedUserData && savedIsAuth && !isAuth) {
      storeAuth.setIsAuth(true);
      storeAuth.setUserData(JSON.parse(savedUserData));
    }
  }, [isAuth]);

  const handleLogout = () => {
    storeAuth.setIsAuth(false);
    storeAuth.clearUserData();
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_data");
    localStorage.removeItem("isAuth");
  };

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
            {/* <button className="py-2 px-8 font-semibold border border-yellow-300 bg-yellow-400 shadow rounded-3xl hover:scale-105 duration-200 transform">
              Premium
            </button> */}

            {/* {isAuth && userData ? (
              <div className="flex items-center gap-4">
                <div className="fl  ex items-center gap-2">
                  {userData.avatar?.thumbnail && (
                    <img  
                      src={userData.avatar.thumbnail}
                      alt={userData.nickname}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <span className="text-white">{userData.nickname}</span>
                </div>
                <button
                  className="py-2 px-8 font-semibold border border-yellow-300 bg-yellow-400 shadow rounded-3xl hover:scale-105 duration-200 transform"
                  // className="py-2 px-8 font-semibold border border-neutral-800 ml-3 bg-neutral-800 shadow rounded-3xl hover:bg-neutral-700 duration-200"
                  onClick={handleLogout}
                >
                  Выйти
                </button>
              </div> */}  
              <Link to="/login">
                <button className="py-2 px-8 font-semibold border border-yellow-300 bg-yellow-400 shadow rounded-3xl hover:scale-105 duration-200 transform">
                  Войти
                </button>
              </Link>
          </div>
        </div>
      </header>
    </>
  );
});

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
