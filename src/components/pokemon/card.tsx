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

export const PokemonCard = ({ pokemonList }: pokemonProps) => {
  const { data: pokemonInfo } = useQuery(
    ["pokemons", pokemonList.url],
    () => getPokemonInfo(pokemonList.url),
    { enabled: !!pokemonList }
  );

  return (
    <div className="flex flex-col p-2 w-full bg-[#fff] rounded-lg">
      <div className="flex items-center text-base">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="포켓볼"
        />
        <span>{pokemonList?.name}</span>
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
        {pokemonInfo?.types?.map((type: pokemonType) => {
          return (
            <div
              className={`px-12px type-label mr-1 ${
                labelColor[type?.type?.name]
              }`}
              key={type?.slot}
            >
              <span className="text-sm">{type?.type?.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
