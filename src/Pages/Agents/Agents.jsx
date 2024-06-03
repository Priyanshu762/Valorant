import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AgentCards from '../../Components/AgentCards';

function Agents() {
    const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/agents')
      .then(response => {
        const uniqueAgents = [];
        const seenUuids = new Set();

        response.data.data.forEach(agent => {
          if (!seenUuids.has(agent.uuid)) {
            seenUuids.add(agent.uuid);
            uniqueAgents.push(agent);
          }
        });

        setAgents(uniqueAgents);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return (  
    <div>
       <AgentCards data={agents} />
    </div>
  )
}

export default Agents
