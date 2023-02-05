import { PokemonHome } from "@/types";
import axios from "../../plugins/axios";

// 포켓몬스터 공식 api 는 포켓몬 전체 조회가 불가능하기 때문에 해당 방식으로 해야함

const getPokemonData = (pokemon: PokemonHome) => {
  let url = pokemon.url;
  axios
    .get(url)
    .then((res) => res.data)
    .then((data) => console.log("왔음", data));
};

export const getPoketmonListAll = async () => {
  await axios
    .get("/pokemon")
    .then((response) => response.data)
    .then((pokemonAll) => {
      console.log("@", pokemonAll);
      pokemonAll?.results?.forEach((pokemon: PokemonHome) => {
        getPokemonData(pokemon);
      });
    });
};
