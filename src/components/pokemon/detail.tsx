import { language } from "@/core/recoil/language";
import { convertLanguage } from "@/core/utils/convertLanguage";
import {
  PokemonBasic,
  PokemonDetailType,
  PokemonSpecies,
  PokemonType,
} from "@/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRecoilState } from "recoil";
import ImageWrapByGeneration from "./generation";
import TypeLabel from "./typeLabel";

interface propsType {
  pokemonInfo: PokemonDetailType;
  pokemonSpeciesInfo: PokemonSpecies;
}

interface flavorTextType {
  flavor_text: string | undefined;
  language: PokemonBasic;
  version: PokemonBasic;
}

const pokemonImg: string[] = [
  "front_default",
  "front_female",
  "back_default",
  "back_female",
  "front_shiny",
  "front_shiny_female",
  "back_shiny",
  "back_shiny_female",
];

const PokemonDetailBox = ({ pokemonInfo, pokemonSpeciesInfo }: propsType) => {
  const [lang, setLang] = useRecoilState(language);

  let flavorText: flavorTextType[] = convertLanguage(
    "flavor",
    pokemonSpeciesInfo?.flavor_text_entries
  );
  console.log("??", pokemonInfo, pokemonSpeciesInfo);

  return (
    <div className="p-5">
      <div className="flex flex-col items-center bg-[#fff] rounded-2xl shadow-xl">
        <div className="p-9">
          <LazyLoadImage
            src={
              pokemonInfo?.sprites?.versions?.["generation-v"]?.["black-white"]
                ?.animated?.front_default || pokemonInfo?.sprites?.front_default
            }
            width={150}
            height={150}
          />
        </div>
        <span># {pokemonInfo?.id}</span>
        <span>{pokemonSpeciesInfo?.names[lang.langNum_name]?.name}</span>
        <div className="flex">
          {pokemonInfo?.types.map((type: PokemonType, index: number) => {
            return <TypeLabel key={index} typeData={type} />;
          })}
        </div>
        <span>{pokemonSpeciesInfo?.genera[lang.langNum_genera]?.genus}</span>
        <div>
          <span className="whitespace-pre">
            {flavorText && flavorText[0]?.flavor_text}
          </span>
        </div>
        <div className="flex">
          <div>
            <span>
              {lang.lang === "en" && "height"}
              {lang.lang === "ko" && "신장"}
            </span>
            <span>{pokemonInfo?.height / 10} m</span>
          </div>
          <div>
            <span>
              {lang.lang === "en" && "weight"}
              {lang.lang === "ko" && "무게"}
            </span>
            <span>{pokemonInfo?.weight / 10} kg</span>
          </div>
        </div>
        <div>
          포켓몬 이미지
          <div className="flex">
            {pokemonImg.map(
              (imgtype, imgIndex) =>
                pokemonInfo?.sprites[imgtype] && (
                  <LazyLoadImage
                    key={imgIndex}
                    src={pokemonInfo?.sprites[imgtype]}
                    alt={imgtype}
                  />
                )
            )}
          </div>
        </div>
        <div>
          <span>진화 형태(api 요청 해야함)</span>
          <div>{pokemonSpeciesInfo?.evolution_chain?.url}</div>
        </div>

        <div>
          시리즈별 모습
          <ImageWrapByGeneration {...pokemonInfo?.sprites?.versions} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailBox;
