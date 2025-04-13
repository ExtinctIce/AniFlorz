import { makeAutoObservable, runInAction } from "mobx";
import { AllGenres } from "../../../../../features/MainPage/genresItem/types";
import { ApiLibria } from "../../../../api";

class GenresStoreApi {
  genres: AllGenres[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getGenresApi = async () => {
    try {
      this.loading = true;
      const res = await ApiLibria.get("/anime/genres/random");

      runInAction(() => {
        this.genres = res.data;
        this.loading = false;
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export default new GenresStoreApi();
