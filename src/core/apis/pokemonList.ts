import { PokemonBasic } from "@/types";
import { useQueries } from "react-query";
import axios from "../../plugins/axios";

// 포켓몬 detail data 가져오기 (url을 통해)
export const getPokemonInfo = async (url: string) => {
  let { data } = await axios.get(url);

  return data;
};

export const getPokemonData = (pokemon: PokemonBasic) => {
  let data = axios
    .get(pokemon.url)
    .then((res) => res.data)
    .then((pokemon) => pokemon);

  // console.log("??", data);
  return data;
};

const OFFSET = 20;
export const getPoketmonListAll = async ({ pageParam = 0 }) => {
  return await axios
    .get("/pokemon", {
      params: { limit: OFFSET, offset: pageParam },
    })
    .then((response) => response.data)
    .then((pokemonAll) => pokemonAll);
};
