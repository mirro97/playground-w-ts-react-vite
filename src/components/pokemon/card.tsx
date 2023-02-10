import { getPokemonInfo } from "@/core/apis/pokemonList";
import { PokemonBasic } from "@/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery } from "react-query";

type pokemonProps = {
  pokemonList: PokemonBasic;
};

type pokemonType = {
  slot: string;
  type: {
    name: string;
  };
};

export const PokemonCard = ({ pokemonList }: pokemonProps) => {
  const { data: pokemonInfo } = useQuery(
    ["pokemons", pokemonList.url],
    () => getPokemonInfo(pokemonList.url),
    { enabled: !!pokemonList }
  );

  // console.log(pokemonInfo);

  return (
    <div className="flex flex-col p-2">
      <span className="text-base">{pokemonList?.name}</span>
      <span className="font-galmuri">Id: {pokemonInfo?.id}</span>
      <div>
        {pokemonInfo?.types?.map((type: pokemonType) => {
          return <span key={type?.slot}>{type?.type?.name}</span>;
        })}
      </div>
      <LazyLoadImage
        key={pokemonInfo?.id}
        src={pokemonInfo?.sprites?.front_default}
        alt={pokemonInfo?.name}
        className="img-lazy"
        width={120}
        height={120}
      />
    </div>
  );
};
