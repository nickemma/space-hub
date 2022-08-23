import React from 'react';
import { useSelector } from 'react-redux';

const JoinMission = () => {
  const missions = useSelector((state) => state.missions);
  const joinMission = missions.filter((mission) => mission.completed);

  return (
    <div>
      <h2> My Missions </h2>
      <ul className="missions-container">
        {joinMission.length > 0 ? (
          joinMission.map((mission) => (
            <li key={mission.id} className="mission">
              {mission.name}
            </li>
          ))
        ) : (
          <li className="mission"> You haven&apos;t joined any mission</li>
        )}
      </ul>
    </div>
  );
};

export default JoinMission;
