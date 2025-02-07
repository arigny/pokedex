import { Statbar } from "../Statbar/Statbar"

import './StatsRow.css';

export const StatRow = ({name, value}: any) => {

  const statName = statNames[name];

  return (
    <div className="row-container">
      <span className="stat-name">{statName}</span>
      <span className="stat-value">{value}</span>
      <Statbar value={value} />
    </div>
  )
}

const statNames: any = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  "special-attack": 'Sp. Attack',
  "special-defense": 'Sp. Defense',
  speed: 'Speed',
}
