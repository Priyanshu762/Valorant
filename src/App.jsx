import React from "react";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header";
import MapList from "./Components/MapList";
import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import Agents from "./Pages/Agents/Agents";

const App = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/maps")
      .then((response) => response.json())
      .then((data) => {
        setMaps(data.data); // Assuming the API response has a 'data' field with the array of maps
      })
      .catch((error) => console.error("Error fetching maps:", error));
  }, []);
  return (
    <>
      <div className="bg-[url('./assets/bg.jpg')] bg-no-repeat bg-cover bg-fixed min-h-screen">
        <Header />
        {/* Setup Routes */}
        <div className="min-h-screen overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/maps" element={<MapList data={maps} />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
