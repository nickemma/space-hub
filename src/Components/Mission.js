import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
import MissionItem from './MissionItem';
import '../styles/Mission.css';

const Mission = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <section data-test-id="missions-section" className="missions">
      <table>
        <thead>
          <tr>
            <th> Mission </th>
            <th> Description </th>
            <th> Status </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionItem
              key={mission.id}
              name={mission.name}
              description={mission.description}
              id={mission.id}
              reserved={mission.completed}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Mission;
