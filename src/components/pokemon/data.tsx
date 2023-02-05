import { PokemonHome } from "../../types";

export const PokemonData = ({ name, url }: PokemonHome) => (
  <div>
    <li>{name}</li>
    <li>{url}</li>
  </div>
);
