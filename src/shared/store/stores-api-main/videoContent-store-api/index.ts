import { makeAutoObservable, runInAction } from "mobx";
import { ApiLibria } from "../../../api";
import { CommunityVideo } from "../../../../features/MainPage/CommunityPage/type";
class VideoContent {
  mediaYoutube: CommunityVideo[] = [];
  loading = false;
  constructor() {
    makeAutoObservable(this);
  }

  makeVideoContent = async () => {
    try {
      this.loading = true;
      const response = await ApiLibria.get("/media/videos");

      runInAction(() => {
        this.mediaYoutube = response.data;
        this.loading = false;
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export default new VideoContent();
