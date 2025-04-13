import { makeAutoObservable, runInAction } from "mobx";
import { FranchiseData } from "../../../../features/MainPage/franchieses/types";
import { ApiLibria } from "../../../api";

class FranchisesStoreApi {
  franchises: FranchiseData[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getFranchieses = async () => {
    try {
      this.loading = true;
      const res = await ApiLibria.get("/anime/franchises/random");

      runInAction(() => {
        this.franchises = res.data;
        this.loading = false;
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export default new FranchisesStoreApi();
