import axios from "axios";
import { IScheduleArray, List } from "../types/schedule.type";

export const api = axios.create({
  baseURL: "https://api.anilibria.tv/v3/",
});

export const getSchedule = async () => {
  const schedule: IScheduleArray = (await api.get("/v3/title/schedule")).data;
  return schedule;
};

export const getTitle = async (code: string) => {
  const title: List = (
    await api.get(`/v3/title?code=${code}&playlist_type=array`)
  ).data;
  return title;
};
