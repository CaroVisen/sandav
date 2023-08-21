export type PodcastsApi = {
  feed: PodcastFeed;
};

export type PodcastFeed = {
  entry: PodcastEntry[];
};

export type PodcastEntry = {
  "im:image": any[];
};
