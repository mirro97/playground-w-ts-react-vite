import { getPokemonInfo, getPokemonListWithSpecies } from "@/core/apis/pokemon";
import { PokemonBasic, PokemonType } from "@/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import TypeLabel from "@/components/pokemon/typeLabel";
import { useRecoilState } from "recoil";
import { language } from "@/core/recoil/language";

interface pokemonProps {
  pokemonIndex: string;
}

export const PokemonCard = ({ pokemonIndex }: pokemonProps) => {
  const [lang, setLang] = useRecoilState(language);

  const { data: pokemonInfo } = useQuery(
    ["pokemons", pokemonIndex],
    () => getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`),
    { enabled: !!pokemonIndex }
  );

  const { data: pokemonSpeciesInfo } = useQuery(
    ["pokemon-species", pokemonIndex],
    () => getPokemonListWithSpecies(pokemonIndex),
    { enabled: !!pokemonIndex }
  );

  return (
    <Link
      to={`/pokemon/${pokemonInfo?.id}`}
      className="flex flex-col p-5 w-full bg-[#fff] rounded-2xl shadow-md min-w-[300px]"
    >
      <div className="flex items-center text-base">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="포켓볼"
        />
        <span className="font-galmuri">
          {pokemonSpeciesInfo?.names[lang.langNum_name]?.name}
        </span>
      </div>
      <span className="font-galmuri"># {pokemonInfo?.id}</span>

      <div className="p-5 h-[160px] flex items-center justify-center">
        <LazyLoadImage
          key={pokemonInfo?.id}
          src={
            pokemonInfo?.sprites?.versions?.["generation-v"]?.["black-white"]
              ?.animated?.front_default || pokemonInfo?.sprites?.front_default
          }
          alt={pokemonInfo?.name}
          className="img-lazy"
          width={
            pokemonInfo?.sprites?.versions?.["generation-v"]?.["black-white"]
              ?.animated?.front_default
              ? 80
              : 120
          }
          height={120}
        />
      </div>

      <div className="flex group is-card">
        {pokemonInfo?.types?.map((type: PokemonType, index: number) => {
          return <TypeLabel key={index} typeData={type} />;
        })}
      </div>
    </Link>
  );
};
