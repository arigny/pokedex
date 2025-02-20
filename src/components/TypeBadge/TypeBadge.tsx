import { useEffect, useState } from "react";
import "./TypeBadge.css";

type BadgeProps = {
  type: string;
};

export const TypeBadge = ({ type }: BadgeProps) => {
  const [icon, setIcon] = useState();

  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

  useEffect(() => {
    import(`./assets/${type}.svg`).then((img) => setIcon(img.default));
  }, [type]);

  return (
    <div
      className="badge-container"
      style={{ backgroundColor: badgeColors[type] }}
    >
      <img className="icon" src={icon} />
      <p className="badge-text">{capitalizedType}</p>
    </div>
  );
};

interface typeStrings {
  [key: string]: string;
}

const badgeColors: typeStrings = {
  fire: "#FD7E25",
  water: "#5B8FD4",
  grass: "#78B663",
  normal: "#9EA0A9",
  flying: "#788FC4",
  fighting: "#C04C65",
  poison: "#9A59C6",
  electric: "#EAD557",
  ground: "#D07B52",
  rock: "#B7AB87",
  psychic: "#D96664",
  ice: "#7DCCC0",
  bug: "#94B047",
  ghost: "#586AA9",
  steel: "#4F7C97",
  dragon: "#2D6ABA",
  dark: "#58575E",
  fairy: "#DD76C3",
};
