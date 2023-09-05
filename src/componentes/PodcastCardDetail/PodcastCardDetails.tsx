import React from "react";
import {
  Card,
  CardDescriptionSubTitle,
  CardDescriptionTitle,
  CardImg,
  CardSubTitle,
  CardTitle,
  ContainerText,
} from "./styles";
import { Divider } from "@mui/material";
import usePodcastCardDetail from "./usePodcastCardDetail";

const PodcastCardDetails = (props: any) => {
  const { podcastSelected } = usePodcastCardDetail();
  console.log(podcastSelected);
  return (
    <Card onClick={() => {}}>
      <CardImg
        src={podcastSelected?.podcastSelected["im:image"][0].label}
        alt=""
      />
      <Divider />
      <ContainerText>
        <CardTitle>
          {podcastSelected?.podcastSelected["im:name"].label}
        </CardTitle>
        <CardSubTitle>
          by {podcastSelected?.podcastSelected["im:artist"].label}
        </CardSubTitle>
      </ContainerText>
      <Divider />
      <ContainerText>
        <CardDescriptionTitle>Description:</CardDescriptionTitle>
        <CardDescriptionSubTitle>
          {podcastSelected?.podcastSelected.summary.label}
        </CardDescriptionSubTitle>
      </ContainerText>
    </Card>
  );
};

export default PodcastCardDetails;
