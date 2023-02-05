import { PokemonData } from "../components/pokemon/data";
import { PokemonAll } from "@/types";
import { useQuery } from "react-query";
import { getPoketmonListAll } from "../core/apis/pokemonList";

const MainPage = () => {
  const { data: pokemon } = useQuery<PokemonAll>(
    "poketmonAll",
    getPoketmonListAll
  );

  return (
    <div>
      {/* {console.log(pokemon)} */}
      {/* {data?.results?.map((pokemon: string) => (
        <PokemonData {...pokemon} key={pokemon.name} />
      ))} */}
    </div>
  );
};

export default MainPage;
