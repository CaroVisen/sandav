import React from "react";
import useHome from "./useHome";

const Home = () => {
  const { podcasts } = useHome();
  return (
    <div>
      {/* {podcasts.map((podcast: any) => (
        <p>{podcast}</p>
      ))} */}
    </div>
  );
};

export default Home;
