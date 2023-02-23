import { language } from "@/core/recoil/language";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

export const Header = () => {
  const [lang, setLang] = useRecoilState(language);
  return (
    <>
      <header className="px-4 sm:px-12 pb-4 pt-5 font-bold text-lg sm:text-xl md:text-2xl flex items-center justify-between bg-[#5A7C88] text-[#fff]">
        <Link to={"/"} className="font-Tenada">
          {lang.lang === "en" && "My Pokemon Encyclopedia"}
          {lang.lang === "ko" && "나만의 포켓몬 도감"}
        </Link>
        <div className="text-xs sm:text-sm items-center hidden sm:flex">
          {/* 웹 */}
          <img className="w-4 sm:w-5" src="/images/global.png" alt="다국어" />
          <button
            onClick={() =>
              setLang({
                lang: "en",
                langNum_name: 8,
                langNum_type: 7,
                langNum_genera: 7,
              })
            }
            className={`${
              lang.lang === "en" ? "" : "text-gray-100"
            } p-1 sm:p-2`}
          >
            English
          </button>
          <button
            onClick={() =>
              setLang({
                lang: "ko",
                langNum_name: 2,
                langNum_type: 1,
                langNum_genera: 1,
              })
            }
            className={`${
              lang.lang === "ko" ? "" : "text-gray-100"
            } p-1 sm:p-2`}
          >
            한국어
          </button>
        </div>

        {/* 모바일 */}
        <div className="text-xs flex items-center sm:hidden">
          <img className="w-4 sm:w-5" src="/images/global.png" alt="다국어" />
          <button
            onClick={() => {
              if (lang.lang === "ko")
                setLang({
                  lang: "en",
                  langNum_name: 8,
                  langNum_type: 7,
                  langNum_genera: 7,
                });
              else
                setLang({
                  lang: "ko",
                  langNum_name: 2,
                  langNum_type: 1,
                  langNum_genera: 1,
                });
            }}
            className={`p-1`}
          >
            {lang.lang === "en" && "English"}
            {lang.lang === "ko" && "한국어"}
          </button>
        </div>
      </header>
    </>
  );
};
