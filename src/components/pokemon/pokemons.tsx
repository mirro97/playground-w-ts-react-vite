import { PokemonCard } from "./card";

export const Pokemons = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonList={pokemon} />
      ))}
    </>
  );
};
