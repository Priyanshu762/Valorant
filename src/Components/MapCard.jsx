import React, { useState } from "react";

const MapCard = ({ map }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg w-80 m-4">
      <div className="cursor-pointer" onClick={toggleDetails}>
        <img src={map.splash} alt={map.displayName} className="w-full h-60 object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{map.displayName}</h2>
          <p className="text-sm">{map.tacticalDescription}</p>
          <p className="text-xs">{map.coordinates}</p>
        </div>
      </div>
      {showDetails && (
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">Callouts:</h3>
          <ul className="text-xs">
            {map.callouts.map((callout, index) => (
              <li key={index} className="mb-1">
                <strong>{callout.regionName}</strong> - {callout.superRegionName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MapCard;
