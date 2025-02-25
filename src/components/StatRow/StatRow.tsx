import { Statbar } from "../Statbar/Statbar";

import "./StatsRow.css";

interface Props {
  name: string;
  value: number;
}

export const StatRow = ({ name, value }: Props) => {
  const statName = statNames[name];

  return (
    <div className="row-container">
      <span className="stat-name">{statName}</span>
      <span className="stat-value">{value}</span>
      <Statbar value={value} />
    </div>
  );
};

const statNames: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Attack",
  "special-defense": "Sp. Defense",
  speed: "Speed",
};
