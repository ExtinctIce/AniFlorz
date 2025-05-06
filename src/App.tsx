import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AnimeDetail from "./pages/AnimeDetail/AnimeDetail";
import AnimeList from "./pages/AnimeDetail/AnimeList";
// import AniFlorzUpd from "./UpdatesAniFlorz/Aniflorz";
import OnGoing from "./pages/FullOngoing/OnGoing";
import Loginfrontend from "./pages/Log/LoginFrontend";
import RegistrationFrontend from "./pages/Log/RegistrationFront";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/titles/:code" element={<AnimeDetail />} />
          <Route path="/serials" element={<AnimeList />} />
          <Route path="/gotitles" element={<OnGoing />} />
          <Route path="/login" element={<Loginfrontend />} />
          <Route path="/register" element={<RegistrationFrontend />} />
        </Route>
      </Routes>
    </>
  );
};
