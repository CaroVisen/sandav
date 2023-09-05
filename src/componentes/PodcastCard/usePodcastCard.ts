import { useNavigate } from "react-router-dom";
import { PodcastEntry } from "../../types/PodcastTypes";
import { useDispatch } from "react-redux";
import { addPodcastSelected } from "../../redux/podcastSelectedSlice";
import { useEffect } from "react";

const usePodcastCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToPodcast = (podcast: PodcastEntry) => {
    dispatch(addPodcastSelected(podcast));
    navigate({ pathname: "/podcast/" + podcast.id.attributes["im:id"] + "/" });
  };

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("reduxState") || ""));
  }, []);

  return { goToPodcast };
};

export default usePodcastCard;
