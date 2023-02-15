import { PokemonType } from "@/types";
import { Link, useNavigate } from "react-router-dom";

type LabelColorType = {
  [key: string]: string;
};

const labelColor: LabelColorType = {
  normal: "bg-normal",
  fighting: "bg-fighting",
  flying: "bg-flying",
  poison: "bg-poison",
  ground: "bg-ground",
  rock: "bg-rock",
  bug: "bg-bug",
  ghost: "bg-ghost",
  steel: "bg-steel",
  fire: "bg-fire",
  water: "bg-water",
  grass: "bg-grass",
  electric: "bg-electric",
  psychic: "bg-psychic",
  ice: "bg-ice",
  dragon: "bg-dragon",
  dark: "bg-dark",
  fairy: "bg-fairy",
  unknown: "bg-unknown",
  shadow: "bg-shadow",
};

interface PockemonTypePorps {
  typeData: PokemonType;
}

const TypeLabel = ({ typeData }: PockemonTypePorps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/pokemon/type/${typeData?.type?.name}`)}
      className={`px-16px py-3px type-label mr-1 ${
        labelColor[typeData?.type?.name]
      }`}
      key={typeData?.type?.name}
    >
      <span className="text-sm">{typeData?.type?.name}</span>
    </button>
  );
};

export default TypeLabel;
