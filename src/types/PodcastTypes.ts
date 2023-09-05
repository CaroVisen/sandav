export type PodcastsApi = {
  feed: PodcastFeed;
};

export type PodcastFeed = {
  entry: PodcastEntry[];
};

export type PodcastEntry = {
  "im:image": Array<{ label: string }>;
  "im:name": { label: string };
  "im:artist": { label: string };
  id: { attributes: { "im:id": string } };
  summary: { label: string };
};
