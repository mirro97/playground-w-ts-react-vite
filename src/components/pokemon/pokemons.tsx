import { PokemonBasic } from "@/types";
import { PokemonCard } from "./card";

type PockemonPorps = {
  pokemons: [PokemonBasic];
};

export const Pokemons = ({ pokemons }: PockemonPorps) => {
  return (
    <>
      {pokemons.map((pokemon: PokemonBasic) => (
        <PokemonCard key={pokemon.url} pokemonList={pokemon} />
      ))}
    </>
  );
};
