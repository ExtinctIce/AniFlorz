import { makeAutoObservable, runInAction } from "mobx";
import { AllGenres } from "../../../../../features/MainPage/genresItem/types";
import { ApiLibria } from "../../../../api";
import { Release } from "./type";

class GenresRenderingStore {
  genres: AllGenres[] | null = [];
  genreGenerate: Release[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getRenderAllTitlesGenres = async (id: string) => {
    try {
      this.loading = true;
      const res = await ApiLibria.get(`/anime/genres/${id}/releases`);

      runInAction(() => {
        this.genreGenerate = res.data.data || [];
        this.loading = false;
      });
    } catch (e) {
      console.error("Ошибка при загрузке:", e);
      this.genreGenerate = [];
      this.loading = false;
    }
  };

  getRenderGenres = async (id: string) => {
    try {
      this.loading = true;
      const res = await ApiLibria.get(`/anime/genres/${id}`);

      runInAction(() => {
        this.genres = Array.isArray(res.data) ? res.data : [res.data];
        this.loading = false;
      });
    } catch (e) {
      console.error("Ошибка при загрузке жанров:", e);
      this.genres = [];
      this.loading = false;
    }
  };

  newRenderGenres = async (id: string) => {
    try {
      this.loading = true;
      const res = await ApiLibria.get(`/anime/genres/${id}`);
      runInAction(() => {
        const genresData = Array.isArray(res.data) ? res.data : [res.data];
        this.genres = genresData;
      });
    } catch (e) {
      console.error("Ошибка при загрузке жанров:", e);
      this.genres = [];
    }
  };
}

export default new GenresRenderingStore();
