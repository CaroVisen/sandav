import React from "react";
import useHome from "./useHome";
import PodcastCard from "../../componentes/PodcastCard/PodcastCard";
import { Badge, Chip, TextField } from "@mui/material";
import { ContainerHome } from "./styles";
import { PodcastEntry } from "../../types/PodcastTypes";

const Home = () => {
  const { podcasts, filterPodcasts, podcastsFiltered } = useHome();
  return (
    <ContainerHome>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Chip
          label={podcastsFiltered?.length}
          style={{
            margin: "auto 0%",
            marginRight: "2%",
            backgroundColor: "blue",
            color: "#fff",
            fontWeight: 700,
          }}
        />
        <TextField
          id="filter"
          label="Filter Podcasts..."
          variant="outlined"
          style={{ marginRight: "15%", width: "25%" }}
          onChange={(e) => {
            filterPodcasts(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          justifyItems: "stretch",
          padding: "5%",
          margin: "auto",
        }}
      >
        {podcastsFiltered?.map((podcast: PodcastEntry) => (
          <PodcastCard podcast={podcast} key={podcast.id.attributes["im:id"]} />
        ))}
        {podcastsFiltered?.length === 0 && <p>No existen podcasts</p>}
      </div>
    </ContainerHome>
  );
};

export default Home;
