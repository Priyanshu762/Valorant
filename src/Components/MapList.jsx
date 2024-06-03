import React from "react";
import MapCard from "./MapCard";

const MapList = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((map) => (
        <MapCard key={map.uuid} map={map} />
      ))}
    </div>
  );
};

export default MapList;
