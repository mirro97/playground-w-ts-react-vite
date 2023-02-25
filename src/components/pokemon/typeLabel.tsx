import { language } from "@/core/recoil/language";
import { PokemonType } from "@/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

type LabelConvertedType = {
  [key: string]: string;
};

type LabelColorType = {
  [key: string]: string;
};

const LabelColor: LabelColorType = {
  normal: "bg-normal",
  fighting: "bg-fighting",
  flying: "bg-flying",
  poison: "bg-poison",
  ground: "bg-ground",
  rock: "bg-rock",
  bug: "bg-bug",
  ghost: "bg-ghost",
  steel: "bg-steel",
  fire: "bg-fire",
  water: "bg-water",
  grass: "bg-grass",
  electric: "bg-electric",
  psychic: "bg-psychic",
  ice: "bg-ice",
  dragon: "bg-dragon",
  dark: "bg-dark",
  fairy: "bg-fairy",
  unknown: "bg-unknown",
  shadow: "bg-shadow",
};
const ConvertedText: LabelConvertedType = {
  normal: "노말",
  fighting: "격투",
  flying: "비행",
  poison: "독",
  ground: "땅",
  rock: "바위",
  bug: "벌레",
  ghost: "고스트",
  steel: "강철",
  fire: "불꽃",
  water: "물",
  grass: "풀",
  electric: "전기",
  psychic: "에스퍼",
  ice: "얼음",
  dragon: "드래곤",
  dark: "악",
  fairy: "페어리",
  unknown: "???",
  shadow: "다크",
};

interface PockemonTypePorps {
  typeData: PokemonType;
}

const TypeLabel = ({ typeData }: PockemonTypePorps) => {
  const [lang, setLang] = useRecoilState(language);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/pokemon/type/${typeData?.type?.name}`)}
      className={`flex justify-center group-[.is-card]:flex-1 group-[.is-tab]:m-1 group-[.is-tab]:w-fit px-[26px] w-1/2 py-3px type-label mr-1 font-semibold ${
        LabelColor[typeData?.type?.name]
      }
    `}
      key={typeData?.type?.name}
    >
      {typeData?.type?.name !== "unknown" &&
        typeData?.type?.name !== "shadow" && (
          <LazyLoadImage
            key={typeData?.type?.name}
            src={`/images/pokemon-type-images/${typeData?.type?.name}.svg`}
            alt={typeData?.type?.name}
            className="mr-1 "
            width={20}
          />
        )}
      <span className="text-sm">
        {lang.lang === "en"
          ? typeData?.type?.name
          : ConvertedText[typeData?.type?.name]}
      </span>
    </button>
  );
};

export default TypeLabel;
