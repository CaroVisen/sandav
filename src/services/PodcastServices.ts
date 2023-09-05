import axios from "axios";
import { PodcastsApi } from "../types/PodcastTypes";

export const getPodcasts = async () => {
  try {
    const response = await axios.get<PodcastsApi>(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );
    return response.data.feed.entry;
  } catch (err) {
    console.log("error: ", err);
    return [];
  }
};

export const getPodcastDetail = async (id: string) => {
  try {
    console.log(id);

    const response = await axios.get(
      "https://api.allorigins.win/raw?url=https://itunes.apple.com/lookup?id=" +
        id
    );

    return response;
  } catch (err) {
    console.log("error: ", err);
    return [];
  }
};

export const getPodcastEpisodes = async () => {
  try {
    const response = await axios.get(
      "https://api.allorigins.win/raw?url=https://rss.applemarketingtools.com/api/v2/us/podcasts/top/10/podcast-episodes.json"
    );
    return response.data.feed.results;
  } catch (err) {
    console.log("error: ", err);
    return [];
  }
};
