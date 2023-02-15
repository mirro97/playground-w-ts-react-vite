import { getPokemonInfo } from "@/core/apis/pokemonList";
import { PokemonBasic, PokemonType } from "@/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import TypeLabel from "@/components/pokemon/typeLabel";

type pokemonProps = {
  pokemonList: PokemonBasic;
};

export const PokemonCard = ({ pokemonList }: pokemonProps) => {
  const { data: pokemonInfo } = useQuery(
    ["pokemons", pokemonList.url],
    () => getPokemonInfo(pokemonList.url),
    { enabled: !!pokemonList }
  );

  return (
    <Link
      to={`/pokemon/${pokemonInfo?.id}`}
      className="flex flex-col p-5 w-full bg-[#fff] rounded-lg"
    >
      <div className="flex items-center text-base">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="포켓볼"
        />
        <span className="font-galmuri">{pokemonList?.name}</span>
      </div>
      <span className="font-galmuri"># {pokemonInfo?.id}</span>
      <LazyLoadImage
        key={pokemonInfo?.id}
        src={pokemonInfo?.sprites?.front_default}
        alt={pokemonInfo?.name}
        className="img-lazy"
        width={120}
        height={120}
      />
      <div className="flex">
        {pokemonInfo?.types?.map((type: PokemonType, index: number) => {
          return <TypeLabel key={index} typeData={type} />;
        })}
      </div>
    </Link>
  );
};
