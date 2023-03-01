import { language } from "@/core/recoil/language";
import { useRecoilState } from "recoil";

const BackButton = () => {
  const [lang, setLang] = useRecoilState(language);
  return (
    <button>
      {lang.lang === "en" && "Back"}
      {lang.lang === "ko" && "뒤로가기"}
    </button>
  );
};

export default BackButton;
