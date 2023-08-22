import React from "react";
import { useNavigate } from "react-router-dom";
import { PodcastEntry } from "../../types/PodcastTypes";

const usePodcastCard = () => {
  const navigate = useNavigate();

  const goToPodcast = (podcast: PodcastEntry) => {
    navigate({ pathname: "/podcast/" + podcast.id.attributes["im:id"] });
  };

  return { goToPodcast };
};

export default usePodcastCard;
