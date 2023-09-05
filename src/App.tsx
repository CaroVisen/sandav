import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Podcast from "./pages/Podcast/Podcast";
import Episode from "./pages/Episode/Episode";
import Navbar from "./componentes/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast/:idPodcast" element={<Podcast />} />
          <Route
            path="/podcast/:idPodcast/episode/:idEpisode"
            element={<Episode />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
