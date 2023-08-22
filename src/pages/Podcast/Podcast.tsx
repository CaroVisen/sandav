import React from "react";
import usePodcast from "./usePodcast";
import PodcastCardDetails from "../../componentes/PodcastCardDetail/PodcastCardDetails";

const Podcast = (props: any) => {
  const {} = usePodcast();
  console.log(props);
  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", margin: "5%" }}
    >
      <PodcastCardDetails />
      <div>
        <div>Episodes: dsasd</div>
        <div>table</div>
      </div>
    </div>
  );
};

export default Podcast;
