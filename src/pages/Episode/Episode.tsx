import React from "react";
import PodcastCardDetails from "../../componentes/PodcastCardDetail/PodcastCardDetails";
import BasicCard from "../../componentes/BasicCard/BasicCard";

const Episode = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "5% 10%",
        gap: "5%",
      }}
    >
      <PodcastCardDetails />
      <div
        style={{
          width: "60%",
          gap: "5%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BasicCard>
          <h3 style={{ textAlign: "left", margin: "3% 5% 2% 5%" }}>
            Wilco - Magnetized
          </h3>
          <p
            style={{
              textAlign: "left",
              fontStyle: "italic",
              margin: "2% 5% 3% 5%",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quo
            quae consequuntur officia temporibus! Minus velit enim officiis eos
            esse eum veniam deserunt corrupti doloremque totam consectetur,
            asperiores sed cupiditate, ea hic? Similique tenetur, sint nulla
            alias impedit voluptatem? Eaque eos qui esse illum quos aliquam
            minus perspiciatis quod iste a omnis ut dolorum, adipisci
          </p>
          <audio
            style={{ width: "90%", marginBottom: "3%" }}
            src={process.env.PUBLIC_URL + "/assets/audio.mp3"}
            controls={true}
          ></audio>
        </BasicCard>
      </div>
    </div>
  );
};

export default Episode;
