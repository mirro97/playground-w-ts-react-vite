import PokemonDetailBox from "@/components/pokemon/detail";
import {
  getPokemonInfoWithId,
  getPokemonListWithSpecies,
} from "@/core/apis/pokemon";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const PokemonImgType = [
  "back_default",
  "back_female",
  "back_shiny",
  "back_shiny_female",
  "front_default",
  "front_female",
  "front_shiny",
  "front_shiny_female",
];

const PokemonDetail = () => {
  const { id: pokemonId } = useParams();

  const { data: pokemonInfo } = useQuery(
    ["pokemons", pokemonId],
    () => getPokemonInfoWithId(pokemonId),
    { enabled: !!pokemonId }
  );

  const { data: pokemonSpeciesInfo } = useQuery(
    ["pokemon-species", pokemonId],
    () => getPokemonListWithSpecies(pokemonId),
    { enabled: !!pokemonId }
  );

  return (
    <div className="max-w-screen-lg mx-auto py-24 px-5">
      <PokemonDetailBox
        pokemonInfo={pokemonInfo}
        pokemonSpeciesInfo={pokemonSpeciesInfo}
      />
    </div>
  );
};

export default PokemonDetail;
