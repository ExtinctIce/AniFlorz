import { makeAutoObservable } from "mobx";

class StoreLazyLoading {
  private isLazyLoading = false;

  getIsLazyLoading() {
    return this.isLazyLoading;
  }

  setIsLazyLoading(isLazyLoading: boolean) {
    this.isLazyLoading = isLazyLoading;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const storeLazyLoading = new StoreLazyLoading();
