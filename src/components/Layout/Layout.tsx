import { Outlet } from "react-router-dom";
import SearchMain from "../../widgets/SearchMain";

const Layout = () => {
  return (
    <>
      <SearchMain />
      <Outlet />
      <footer className="flex justify-center bg-black text-black">@ExtinctHaze</footer>
    </>
  );
};

export default Layout;
