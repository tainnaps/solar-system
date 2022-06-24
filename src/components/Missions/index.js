import React from 'react';
import Title from '../Title';
import missions from '../../data/missions';
import MissionCard from '../MissionCard';
import './index.css';

class Missions extends React.Component {
  render() {
    const missionsCards = missions.map((mission) => (
      <MissionCard
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
        key={ mission.name }
      />
    ));
    return (
      <div data-testid="missions" className="missions-section">
        <Title headline="Missões" />
        <div className="missions">{missionsCards}</div>
      </div>
    );
  }
}

export default Missions;
