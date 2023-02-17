import { getPokemonListWithType } from "@/core/apis/pokemonList";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const PokemonType = () => {
  const { type } = useParams();
  const { data: typedPokemonList } = useQuery(
    ["typed-pokemon", type],
    () => getPokemonListWithType(type),
    { enabled: !!type }
  );

  console.log(typedPokemonList?.pokemon);

  const getPokemonId = () => {};

  return (
    <div>
      <div>해당 타입 포켓몬만 보여주기</div>
      <div>
        {typedPokemonList?.pokemon?.map((page, pageIndex) => {
          <div>
            {console.log(page)}
            {/* 포켓몬 이름 {page?.pokemon?.name} */}
            <LazyLoadImage src="" />
          </div>;
        })}
      </div>
    </div>
  );
};

export default PokemonType;
