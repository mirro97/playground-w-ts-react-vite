import { PokemonBasic } from "@/types";
import { PokemonCard } from "./card";

interface PockemonPorps {
  pokemons: PokemonBasic[];
}

export const Pokemons = ({ pokemons }: PockemonPorps) => {
  return (
    <>
      {pokemons.map((pokemon: PokemonBasic) => (
        <PokemonCard key={pokemon.url} pokemonIndex={pokemon.name} />
      ))}
    </>
  );
};
