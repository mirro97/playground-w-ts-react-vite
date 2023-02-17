import { PokemonBasic } from "@/types";
import { useQueries } from "react-query";
import axios from "../../plugins/axios";

// 포켓몬 detail data 가져오기 (url을 통해)
export const getPokemonInfo = async (url: string) => {
  let data = await axios
    .get(url)
    .then((res) => res.data)
    .then((pokemon) => pokemon);

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

export const getPokemonListWithType = async (typeId: string) => {
  return await axios.get(`/type/${typeId}`).then((res) => res.data);
};
