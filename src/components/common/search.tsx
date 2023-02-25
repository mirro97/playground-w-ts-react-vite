import { language } from "@/core/recoil/language";
import React, { SetStateAction } from "react";
import { useRecoilState } from "recoil";

interface Props {
  input: string | undefined;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const SearchInput = ({ input, setInput, setSearch }: Props) => {
  const [lang, setLang] = useRecoilState(language);
  const placehoder = () => {
    if (lang.lang === "en") return "Seach Pokemon With Name or Id!";
    else if (lang.lang === "ko")
      return "포켓몬 이름 또는 아이디를 입력해주세요!";
  };

  const write = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const search = () => {
    setSearch(input);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="px-5 py-4 rounded-xl shadow-md w-full focus:outline-none"
        onChange={write}
        placeholder={placehoder()}
      />
      <button
        className="absolute right-[15px] top-3 hover:cursor-pointer"
        onClick={search}
      >
        <img src="/images/soothe-bell.png" alt="검색" />
      </button>
    </div>
  );
};

export default SearchInput;
