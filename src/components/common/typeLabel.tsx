import { language } from "@/core/recoil/language";
import { ConvertedText } from "@/core/utils/ConvertedText";
import { BackgroundColor } from "@/core/utils/convertTextToColor";
import { PokemonType } from "@/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

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
        BackgroundColor[typeData?.type?.name]
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
