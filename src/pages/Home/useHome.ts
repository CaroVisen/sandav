import React, { useEffect, useState } from "react";
import { getPodcasts } from "../../services/PodcastServices";

const useHome = () => {
  const [podcasts, setPodcasts] = useState<any>();

  const getAllPodcasts = async () => {
    let allPodcast = await getPodcasts();
    setPodcasts(allPodcast);
  };

  useEffect(() => {
    getAllPodcasts();
  }, []);

  return { podcasts };
};

export default useHome;
