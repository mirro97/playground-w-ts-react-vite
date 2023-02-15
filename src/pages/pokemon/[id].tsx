import { getPokemonInfo } from "@/core/apis/pokemonList";
import { PokemonType } from "@/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
    ["pokemons", `https://pokeapi.co/api/v2/pokemon/${pokemonId}`],
    () => getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`),
    { enabled: !!pokemonId }
  );

  // console.log(pokemonInfo);
  return (
    <div>
      포켓몬 상세
      <div>포켓몬 이름: {pokemonInfo?.name}</div>
      <div>
        포켓몬 타입:
        {pokemonInfo?.types?.map((type: PokemonType) => (
          <div key={type?.slot}>{type?.type?.name}</div>
        ))}
      </div>
      <div>
        포켓몬 이미지
        <div className="flex">
          {PokemonImgType.map(
            (imgtype) =>
              pokemonInfo?.sprites[imgtype] && (
                <LazyLoadImage
                  src={pokemonInfo?.sprites[imgtype]}
                  alt={imgtype}
                />
              )
          )}
        </div>
      </div>
      <div>포켓몬 키 {pokemonInfo?.height}</div>
      <div>포켓몬 특징은 이후 더 추가할 예정</div>
    </div>
  );
};

export default PokemonDetail;
