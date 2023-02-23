import { language } from "@/core/recoil/language";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRecoilState } from "recoil";

interface Props {
  enTitle: string;
  koTitle: string;
  src: string;
}

const GenerationImageCard = ({ enTitle, koTitle, src }: Props) => {
  const [lang, setLang] = useRecoilState(language);

  return (
    <div className="shadow-sm hover:shadow-md hover:animate-pulse mr-[10px] w-32 mb-3 rounded-md p-[10px]">
      <div className="w-28 h-28 flex justify-center items-center mx-auto">
        <LazyLoadImage src={src} alt={enTitle} />
      </div>
      <span className="text-xs text-center font-galmuri">
        {lang.lang === "en" && enTitle}
        {lang.lang === "ko" && koTitle}
      </span>
    </div>
  );
};

export default GenerationImageCard;
