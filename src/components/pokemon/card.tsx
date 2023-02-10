import { getPokemonInfo } from "@/core/apis/pokemonList";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQueries, useQuery } from "react-query";

export const PokemonCard = ({ pokemonList }) => {
  const { data: pokemonInfo } = useQuery(
    ["pokemons", pokemonList.url],
    () => getPokemonInfo(pokemonList.url),
    { enabled: !!pokemonList }
  );

  return (
    <div className="flex flex-col p-2">
      <span className="text-base">{pokemonList?.name}</span>
      <span>Id: {pokemonInfo?.id}</span>
      <span>{pokemonList?.url}</span>
      <LazyLoadImage
        key={pokemonInfo?.id}
        src={pokemonInfo?.sprites?.front_default}
        alt={pokemonInfo?.name}
        className="img-lazy"
        width={200}
        height={200}
      />
    </div>
  );
};
