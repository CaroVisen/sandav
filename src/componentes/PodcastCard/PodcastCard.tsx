import React from "react";
import { Card, CardImg, CardSubTitle, CardTitle } from "./styles";
import { relative } from "path";
import usePodcastCard from "./usePodcastCard";
import { PodcastEntry } from "../../types/PodcastTypes";

const PodcastCard = (props: any) => {
  const { podcast } = props;
  const { goToPodcast } = usePodcastCard();

  return (
    <Card
      key={podcast.id.attributes["im:id"]}
      onClick={() => {
        goToPodcast(podcast);
      }}
    >
      <CardImg src={podcast["im:image"][0].label} />
      <CardTitle>{podcast["im:name"].label}</CardTitle>
      <CardSubTitle>Author: {podcast["im:artist"].label}</CardSubTitle>
    </Card>
  );
};

export default PodcastCard;
