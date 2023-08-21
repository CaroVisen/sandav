import axios from "axios";
import { PodcastsApi } from "../types/PodcastTypes";

export const getPodcasts = async () => {
  try {
    await axios
      .get<PodcastsApi>(
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
      )
      .then((podcasts) => {
        console.log((podcasts.data.feed.entry[0] as any)["im:image"]);
      });
  } catch (err) {
    console.log("error: ", err);
  }
};
