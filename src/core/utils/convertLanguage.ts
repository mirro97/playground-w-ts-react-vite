import { PokemonLanguage } from "@/types";
import { useRecoilState } from "recoil";
import { language } from "../recoil/language";

export const convertLanguage = (type: string, context: []) => {
  const [lang, setLang] = useRecoilState(language);
  let data: any[] = [];

  if (type === "flavor")
    data = context?.filter(
      (data: PokemonLanguage) => data.language.name === lang.lang
    );
  return data;
};
