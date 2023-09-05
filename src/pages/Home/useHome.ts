import React, { useEffect, useState } from "react";
import { getPodcasts } from "../../services/PodcastServices";
import { PodcastEntry } from "../../types/PodcastTypes";
import { useDispatch, useSelector } from "react-redux";
import { addLoader, changeLoader } from "../../redux/loaderSlice";
import { addLastUpdate, addPodcast } from "../../redux/podcastsSlice";
import { addDays, format } from "date-fns";

const useHome = () => {
  const [podcasts, setPodcasts] = useState<PodcastEntry[]>();
  const [podcastsFiltered, setPodcastsFiltered] = useState<PodcastEntry[]>();
  const podcastsState = useSelector((state: any) => state.podcasts);
  const podcastLastUpdate = useSelector((state: any) => state.lastUpdate);
  const tomorrow = addDays(new Date(), 1);
  const tomorrowFormat = format(tomorrow, "yyyy-MM-dd HH:mm:ss");
  const dispatch = useDispatch();

  const getAllPodcasts = async () => {
    dispatch(changeLoader(true));
    await getPodcasts().then((res) => {
      setPodcasts(res);
      setPodcastsFiltered(res);
      console.log(res as PodcastEntry[]);
      dispatch(addPodcast(res as PodcastEntry[]));
      dispatch(addLastUpdate(tomorrowFormat));
    });
    dispatch(changeLoader(false));
  };

  const filterPodcasts = async (filtro: string) => {
    let filtered = podcasts?.filter(
      (pod) =>
        pod["im:name"].label.toUpperCase().includes(filtro.toUpperCase()) ||
        pod["im:artist"].label.toUpperCase().includes(filtro.toUpperCase())
    );
    dispatch(addPodcast(filtered));
    setPodcastsFiltered(filtered);
  };

  useEffect(() => {
    console.log(podcastLastUpdate);
    if (podcastLastUpdate == "" || podcastLastUpdate == undefined) {
      getAllPodcasts();
    } else {
      if (format(new Date(), "yyyy-MM-dd HH:mm:ss") < podcastLastUpdate) {
        getAllPodcasts();
      } else {
        setPodcasts(podcastsState.podcasts);
      }
    }
  }, []);

  return {
    podcasts,
    filterPodcasts,
    podcastsFiltered,
  };
};

export default useHome;
