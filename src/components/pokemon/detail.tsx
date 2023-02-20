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
import Label from "@/components/Label";
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
    <div className="flex flex-col p-10 items-center bg-[#fff] rounded-2xl shadow-xl">
      <div className="p-9">
        <div className="max-w-[180px]">
          <LazyLoadImage
            src={
              pokemonInfo?.sprites?.versions?.["generation-v"]?.["black-white"]
                ?.animated?.front_default || pokemonInfo?.sprites?.front_default
            }
            width={120}
            height={120}
          />
        </div>
      </div>
      <span className="font-bold text-gray-100"># {pokemonInfo?.id}</span>
      <span className="text-2xl font-bold">
        {pokemonSpeciesInfo?.names[lang.langNum_name]?.name}
      </span>
      <div className="flex w-full justify-center group is-tab mt-3">
        {pokemonInfo?.types.map((type: PokemonType, index: number) => {
          return <TypeLabel key={index} typeData={type} />;
        })}
      </div>
      <div className="mt-3 text-lg font-bold text-gray-100">
        {pokemonSpeciesInfo?.genera[lang.langNum_genera]?.genus}
      </div>
      <div className="mt-3 text-center">
        <span>{flavorText && flavorText[0]?.flavor_text}</span>
      </div>
      <div className="flex mt-7">
        <div className="flex flex-col items-center mr-5">
          <div className="max-w-[180px]"></div>
          <Label context={lang.lang === "en" ? "HEIGHT" : "신장"} />
          <span className="mt-3">{pokemonInfo?.height / 10} m</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="max-w-[180px]"></div>
          <Label context={lang.lang === "en" ? "WEIGHT" : "무게"} />
          <span className="mt-3">{pokemonInfo?.weight / 10} kg</span>
        </div>
      </div>
      <div className="mt-7 flex flex-wrap justify-center">
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
      <div className="mt-7">
        <span className="text-lg text-center font-bold">
          진화 형태(api 요청 해야함)
        </span>
        <div>{pokemonSpeciesInfo?.evolution_chain?.url}</div>
      </div>

      <div className="mt-7">
        <span className="text-lg text-center font-bold">시리즈별 모습</span>
        <ImageWrapByGeneration {...pokemonInfo?.sprites?.versions} />
      </div>
    </div>
  );
};

export default PokemonDetailBox;
