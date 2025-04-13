import { Route, Routes } from "react-router-dom";
import Layout from "../../pages/Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import AnimeDetail from "../../pages/AnimeDetail/AnimeDetail";
import AnimeList from "../../pages/AnimeDetail/AnimeList";
import OnGoing from "../../pages/FullOngoing/OnGoing";
import { Login } from "../../pages/sign-in/login-page/LoginFrontend";
import { RegistrationFrontend } from "../../pages/sign-in/RegistrationFront";
import { GenresItemPage } from "../../pages/GenresItemPage/genresItemPage";
import { AllGenresView } from "../../pages/AllGenresPage/AllGenresView";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/titles/:code" element={<AnimeDetail />} />
          <Route path="/serials" element={<AnimeList />} />
          <Route path="/gotitles" element={<OnGoing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationFrontend />} />
          <Route path="/allgenres" element={<AllGenresView />} />
          <Route path="/genres/:id" element={<GenresItemPage />} />
        </Route>
      </Routes>
    </>
  );
};
