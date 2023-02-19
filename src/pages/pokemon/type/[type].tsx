import { Pokemons } from "@/components/pokemon/pokemons";
import { getPokemonListWithType } from "@/core/apis/pokemon";
import { language } from "@/core/recoil/language";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

const PokemonType = () => {
  const [lang, setLang] = useRecoilState(language);

  const { type } = useParams();
  const { data: typedPokemonList } = useQuery(
    ["typed-pokemonList", type],
    () => getPokemonListWithType(type),
    { enabled: !!type }
  );

  console.log(typedPokemonList);

  return (
    <div>
      <div>해당 타입 포켓몬만 보여주기</div>
      <div>현재 타입: {typedPokemonList?.names[lang.langNum_type]?.name}</div>
      <div>
        {/* {typedPokemonList?.pokemon?.map((pokemon:[], index:number) => (
             <Pokemons key={index} pokemons={pokemon} />
        ))} */}
      </div>
    </div>
  );
};

export default PokemonType;
