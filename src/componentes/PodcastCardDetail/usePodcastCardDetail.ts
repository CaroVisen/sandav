import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PodcastEntry } from "../../types/PodcastTypes";
import { useSelector } from "react-redux";

const usePodcastCardDetail = () => {
  const navigate = useNavigate();
  const podcastSelected = useSelector((state: any) => state.podcastSelected);

  const goToPodcast = (podcast: PodcastEntry) => {
    navigate({ pathname: "/podcast/" + podcast.id.attributes["im:id"] + "/" });
  };

  useEffect(() => {
    if (podcastSelected == null) {
      JSON.parse(localStorage.getItem("reduxState") || "");
    }
  }, []);

  return { goToPodcast, podcastSelected };
};

export default usePodcastCardDetail;
