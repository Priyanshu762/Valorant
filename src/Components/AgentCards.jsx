import React, { useState } from 'react';

const AgentCard = ({ agent, onClick }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg w-80 cursor-pointer" onClick={() => onClick(agent)}>
      <img src={agent.fullPortrait} alt={agent.displayName} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{agent.displayName}</h2>
      </div>
    </div>
  );
};

const Popup = ({ agent, onClose }) => {
  if (!agent) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 ">
      <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg h-full p-4 relative ">
        <button className="absolute top-2 right-2 text-3xl" onClick={onClose}>×</button>
        <h2 className="text-3xl font-bold mb-2">{agent.displayName}</h2>
        <p className="text-xl mb-4">{agent.description}</p>
        <div className="flex items-center mb-4">
          {agent.role && (
            <>
              <img src={agent.role.displayIcon} alt={agent.role.displayName} className="w-6 h-6 mr-2" />
              <span className="text-xl">{agent.role.displayName}</span>
            </>
          )}
        </div>
        <div>
          {agent.abilities.map((ability) => (
            <div key={ability.slot} className="mb-2">
              <div className="flex items-center">
                <img src={ability.displayIcon} alt={ability.displayName} className="w-6 h-6 mr-2" />
                <strong className='text-xl'>{ability.displayName} </strong>
              </div>
              <p className="text-xl">{ability.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

const AgentCards = ({ data }) => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const handleCardClick = (agent) => {
    setSelectedAgent(agent);
  };

  const handleClosePopup = () => {
    setSelectedAgent(null);
  };

  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {data.map((agent) => (
          <AgentCard key={agent.uuid} agent={agent} onClick={handleCardClick} />
        ))}
      </div>
      {selectedAgent && <Popup agent={selectedAgent} onClose={handleClosePopup} />}
    </div>
  );
};

export default AgentCards;
