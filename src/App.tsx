import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AnimeDetail from "./pages/AnimeDetail/AnimeDetail";
import AnimeList from "./pages/AnimeDetail/AnimeList";
import AniFlorzUpd from "./UpdatesAniFlorz/Aniflorz";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/AniFlorz" element={<HomePage />} index />
          <Route path="/titles/:code" element={<AnimeDetail />} />
          <Route path="/serials" element={<AnimeList />} />
          <Route path="/AniFlorzUpd" element={<AniFlorzUpd />} />
        </Route>
      </Routes>
    </>
  );
};
