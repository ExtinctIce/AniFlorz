import { useEffect, useState } from "react";
// import { api } from "../../api";
// import { ITitle } from "../../types/anime.type";
import axios from "axios";

const RandomTitleGeneration = () => {
  const [appState, setAppState] = useState();
  
  useEffect(() => {
    const getSchedule = async () => {
      const schedule: IScheduleArray = (await api.get("/v3/title/schedule")).data;
      return schedule;
    };
  }, [setAppState]);
  // const getSchedule = async () => {
  //   const schedule: IScheduleArray = (await api.get("/v3/title/schedule")).data;
  //   return schedule;
  // };
  return <></>;
};

export default RandomTitleGeneration;
