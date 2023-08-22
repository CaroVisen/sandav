import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPodcastDetail } from "../../services/PodcastServices";

const usePodcast = () => {
  const { idPodcast } = useParams();

  useEffect(() => {
    console.log(idPodcast);
    if (idPodcast != undefined) {
      getPodcastDetail(idPodcast).then((res) => {
        console.log(res);
      });
    }
  }, []);

  return {};
};

export default usePodcast;
