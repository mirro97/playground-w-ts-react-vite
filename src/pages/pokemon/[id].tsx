import { getPokemonInfo } from "@/core/apis/pokemonList";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { id: pokemonId } = useParams();

  const { data: pokemonInfo } = useQuery(
    ["pokemons", `https://pokeapi.co/api/v2/pokemon/${pokemonId}`],
    () => getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`),
    { enabled: !!pokemonId }
  );

  console.log(pokemonInfo);
  return <div>포켓몬 상세</div>;
};

export default PokemonDetail;
