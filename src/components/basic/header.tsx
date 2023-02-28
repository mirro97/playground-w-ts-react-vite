import { language } from "@/core/recoil/language";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

export const Header = () => {
  const [lang, setLang] = useRecoilState(language);
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <>
      <header
        className={`z-10 w-full px-4 sm:px-12  font-bold text-lg sm:text-xl md:text-2xl bg-[#fff] fixed  ${
          scrollPosition < 20 ? "" : "border-solid border-b border-[#001b371a]"
        }`}
      >
        <div className={`pb-4 pt-5  flex items-center justify-between`}>
          <Link to={"/"} className="font-Tenada text-[#5A7C88]">
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
                lang.lang === "en" ? "text-[#5A7C88]" : "text-gray-100"
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
                lang.lang === "ko" ? "text-[#5A7C88]" : "text-gray-100"
              } p-1 sm:p-2`}
            >
              한국어
            </button>
          </div>

          {/* 모바일 */}
          <div className="text-xs flex items-center sm:hidden">
            <img className="w-4 sm:w-5" src="/images/global.png" alt="다국어" />
            <button
              className={"p-1 text-[#5A7C88]"}
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
            >
              {lang.lang === "en" && "English"}
              {lang.lang === "ko" && "한국어"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
