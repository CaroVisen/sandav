import React, { useEffect, useState } from "react";
import { getPodcasts } from "../../services/PodcastServices";
import { PodcastEntry } from "../../types/PodcastTypes";
import { useDispatch } from "react-redux";
import { addLoader, changeLoader } from "../../redux/loaderSlice";

const useHome = () => {
  const [podcasts, setPodcasts] = useState<PodcastEntry[]>();
  const [podcastsFiltered, setPodcastsFiltered] = useState<PodcastEntry[]>();
  const dispatch = useDispatch();

  const getAllPodcasts = async () => {
    dispatch(changeLoader(true));
    await getPodcasts().then((res) => {
      setPodcasts(res);
      setPodcastsFiltered(res);
    });
    dispatch(changeLoader(false));
  };

  const filterPodcasts = async (filtro: string) => {
    setPodcastsFiltered(
      podcasts?.filter(
        (pod) =>
          pod["im:name"].label.toUpperCase().includes(filtro.toUpperCase()) ||
          pod["im:artist"].label.toUpperCase().includes(filtro.toUpperCase())
      )
    );
  };

  useEffect(() => {
    getAllPodcasts();
  }, []);

  return {
    podcasts,
    filterPodcasts,
    podcastsFiltered,
  };
};

export default useHome;
