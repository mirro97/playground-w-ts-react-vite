import axios from "../../plugins/axios";

// 포켓몬 detail data 가져오기 (url을 통해)
export const getPokemonInfo = async (url: string) => {
  let data = await axios
    .get(url)
    .then((res) => res.data)
    .then((pokemon) => pokemon);

  return data;
};

// 포켓몬 detail data 가져오기 (포켓몬 id를 통해)
export const getPokemonInfoWithId = async (id: string | undefined) => {
  let data = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.data)
    .then((pokemon) => pokemon);

  return data;
};

const OFFSET = 19;
export const getPoketmonListAll = async ({ pageParam = 0, search }: any) => {
  let apiUrl = `/pokemon`;
  if (!!search) apiUrl = `/pokemon/${search}`;

  return await axios
    .get(apiUrl, {
      params: { limit: OFFSET, offset: pageParam },
    })
    .then((response) => response.data)
    .then((pokemonAll) => pokemonAll);
};

export const getPokemonListWithType = async (typeId: string | undefined) => {
  return await axios.get(`/type/${typeId}`).then((res) => res.data);
};

export const getPokemonListWithSpecies = async (id: string | undefined) => {
  return await axios.get(`/pokemon-species/${id}`).then((res) => res.data);
};
