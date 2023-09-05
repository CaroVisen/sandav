import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getPodcastDetail,
  getPodcastEpisodes,
} from "../../services/PodcastServices";
import { useSelector } from "react-redux";
import { Episode } from "../../types/EpisodesTypes";
import { PodcastEntry } from "../../types/PodcastTypes";
import { addPodcastSelected } from "../../redux/podcastSelectedSlice";
import { useNavigate } from "react-router-dom";

const usePodcast = () => {
  const { idPodcast } = useParams();
  const podcastSelected = useSelector((state: any) => state.podcastSelected);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    if (idPodcast != undefined) {
      getPodcastEpisodes().then((res) => {
        setEpisodes(res);
      });
    }
  }, []);

  return { podcastSelected, episodes };
};

export default usePodcast;
