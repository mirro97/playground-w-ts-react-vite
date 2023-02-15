import { PokemonType } from "@/types";
import TypeLabel from "./pokemon/typeLabel";

const typeListAll = [
  { slot: 0, type: { name: "normal", url: "" } },
  { slot: 0, type: { name: "fighting", url: "" } },
  { slot: 0, type: { name: "flying", url: "" } },
  { slot: 0, type: { name: "poison", url: "" } },
  { slot: 0, type: { name: "ground", url: "" } },
  { slot: 0, type: { name: "rock", url: "" } },
  { slot: 0, type: { name: "bug", url: "" } },
  { slot: 0, type: { name: "ghost", url: "" } },
  { slot: 0, type: { name: "steel", url: "" } },
  { slot: 0, type: { name: "fire", url: "" } },
  { slot: 0, type: { name: "water", url: "" } },
  { slot: 0, type: { name: "grass", url: "" } },
  { slot: 0, type: { name: "electric", url: "" } },
  { slot: 0, type: { name: "psychic", url: "" } },
  { slot: 0, type: { name: "ice", url: "" } },
  { slot: 0, type: { name: "dragon", url: "" } },
  { slot: 0, type: { name: "dark", url: "" } },
  { slot: 0, type: { name: "fairy", url: "" } },
  { slot: 0, type: { name: "unknown", url: "" } },
  { slot: 0, type: { name: "shadow", url: "" } },
];

const TypeNavigationBar = () => {
  return (
    <nav className="p-3 flex flex-wrap">
      {typeListAll.map((type: PokemonType, index: number) => (
        <TypeLabel key={index} typeData={type} />
      ))}
    </nav>
  );
};

export default TypeNavigationBar;
