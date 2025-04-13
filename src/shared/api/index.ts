import axios from "axios";
import { IScheduleArray, List } from "../types/schedule.type";
import { CasketLoader } from "../ui/spinner";

export const api = axios.create({
  baseURL: "https://api.anilibria.tv/v3/",
});

export const ApiLibria = axios.create({
  baseURL: "https://anilibria.top/api/v1/",
});

export const getSchedule = async () => {
  try {
    const schedule: IScheduleArray = (await api.get("/v3/title/schedule")).data;
    return schedule;
  } catch (error) {
    console.log(error);
  } finally {
    CasketLoader();
  }
};

export const getTitle = async (code: string) => {
  const title: List = (
    await api.get(`/v3/title?code=${code}&playlist_type=array`)
  ).data;
  return title;
};
