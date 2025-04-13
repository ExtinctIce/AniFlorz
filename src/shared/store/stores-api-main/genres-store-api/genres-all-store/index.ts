import { makeAutoObservable, runInAction } from "mobx";
import { AllGenres } from "../../../../../features/MainPage/genresItem/types";
import { ApiLibria } from "../../../../api";

class GenresAllStore {
  allGenres: AllGenres[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  allGenresRender = async () => {
    try {
      this.loading = true;
      const res = await ApiLibria.get("/anime/genres");

      runInAction(() => {
        this.allGenres = res.data;
        this.loading = false;
      });
    } catch (e) {
      console.error("Ошибка при загрузке:", e);
    }
  };
}

export default new GenresAllStore();
