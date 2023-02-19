import { language } from "@/core/recoil/language";
import { PokemonVersionsGeneration } from "@/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRecoilState } from "recoil";

const ImageWrapByGeneration = (
  generationImage: PokemonVersionsGeneration | undefined
) => {
  const [lang, setLang] = useRecoilState(language);
  return (
    <div>
      <div>
        <span>1세대</span>
        <div className="flex ">
          <div>
            {lang.lang === "en" && "Pokémon Red & Blue"}
            {lang.lang === "ko" && "포켓몬스터 레드·블루"}

            <LazyLoadImage
              src={
                generationImage?.["generation-i"]?.["red-blue"]?.front_default
              }
              alt="Pokémon Red & Blue"
            />
          </div>
          <div>
            {lang.lang === "en" && "Pokémon Yellow"}
            {lang.lang === "ko" && "포켓몬스터 옐로"}
            <LazyLoadImage
              src={generationImage?.["generation-i"]?.["yellow"]?.front_default}
              alt="Pokémon Yellow"
            />
          </div>
        </div>
      </div>
      <div>
        <span>2세대</span>
        <div className="flex flex-wrap">
          <div>
            {lang.lang === "en" && "Pokémon Crystal Version"}
            {lang.lang === "ko" && "포켓몬스터 크리스탈"}
            포켓몬스터
            <LazyLoadImage
              src={
                generationImage?.["generation-ii"]?.["crystal"]?.front_default
              }
              alt="Pokémon Crystal Version"
            />
          </div>
          <div>
            {lang.lang === "en" && "Gold·Silver"}
            {lang.lang === "ko" && "포켓몬스터 골드·실버"}

            <LazyLoadImage
              src={generationImage?.["generation-ii"]?.["gold"]?.front_default}
              alt="Gold·Silver"
            />
          </div>
        </div>
      </div>
      <div>
        <span>3세대</span>
        <div className="flex">
          <div>
            {lang.lang === "en" && "Pokémon Emerald"}
            {lang.lang === "ko" && "포켓몬스터 에메랄드"}
            <LazyLoadImage
              src={
                generationImage?.["generation-iii"]?.["emerald"]?.front_default
              }
              alt="Pokémon Emerald"
            />
          </div>
          <div>
            {lang.lang === "en" && "Pokémon FireRed and LeafGreen"}
            {lang.lang === "ko" && "포켓몬스터 파이어레드·리프그린"}
            <LazyLoadImage
              src={
                generationImage?.["generation-iii"]?.["firered-leafgreen"]
                  ?.front_default
              }
              alt="Pokémon FireRed and LeafGreen"
            />
          </div>
          <div>
            {lang.lang === "en" && "Pokémon Ruby and Sapphire"}
            {lang.lang === "ko" && "포켓몬스터 루비·사파이어"}
            <LazyLoadImage
              src={
                generationImage?.["generation-iii"]?.["ruby-sapphire"]
                  ?.front_default
              }
              alt="Pokémon Ruby and Sapphire"
            />
          </div>
        </div>
      </div>
      <div>
        <span>4세대</span>
        <div className="flex">
          <div>
            {lang.lang === "en" && "Pokémon Diamond·Pearl"}
            {lang.lang === "ko" && "포켓몬스터DP 디아루가·펄기아"}
            <LazyLoadImage
              src={
                generationImage?.["generation-iv"]?.["diamond-pearl"]
                  ?.front_default
              }
              alt="Pokémon Diamond·Pearl"
            />
          </div>
          <div>
            {lang.lang === "en" &&
              "Pokémon HeartGold Version · SoulSilver Version"}
            {lang.lang === "ko" && "포켓몬스터 하트골드 · 소울실버"}
            <LazyLoadImage
              src={
                generationImage?.["generation-iv"]?.["heartgold-soulsilver"]
                  ?.front_default
              }
              alt="Pokémon HeartGold Version · SoulSilver Version"
            />
          </div>
          <div>
            {lang.lang === "en" && "Pokémon Platinum Version"}
            {lang.lang === "ko" && "포켓몬스터Pt 기라티나"}
            <LazyLoadImage
              src={
                generationImage?.["generation-iv"]?.["platinum"]?.front_default
              }
              alt="Pokémon Platinum Version"
            />
          </div>
        </div>
      </div>
      <div>
        <span>5세대</span>
        <div>
          <div>
            {lang.lang === "en" && "Pokémon Black Version·White Version"}
            {lang.lang === "ko" && "포켓몬스터 블랙·화이트"}
            <LazyLoadImage
              src={
                generationImage?.["generation-v"]?.["black-white"]
                  ?.front_default
              }
              alt="Pokémon Black Version·White Version"
            />
          </div>
        </div>
      </div>
      <div>
        <span>6세대</span>
        <div className="flex">
          <div>
            {lang.lang === "en" && "Pokémon Omega Ruby·Alpha Sapphire"}
            {lang.lang === "ko" && "포켓몬스터 오메가루비·알파사파이어"}
            <LazyLoadImage
              src={
                generationImage?.["generation-vi"]?.["omegaruby-alphasapphire"]
                  ?.front_default
              }
              alt="Pokémon Omega Ruby·Alpha Sapphire"
            />
          </div>
          <div>
            {lang.lang === "en" && "Pokémon X·Y"}
            {lang.lang === "ko" && "포켓몬스터 X·Y"}
            <LazyLoadImage
              src={generationImage?.["generation-vi"]?.["x-y"]?.front_default}
              alt="Pokémon X·Y"
            />
          </div>
        </div>
      </div>
      <div>
        <span>7세대</span>
        <div>
          <div>
            {lang.lang === "en" && "Pokémon Ultra Sun·Ultra Moon"}
            {lang.lang === "ko" && "포켓몬스터 울트라썬·울트라문"}
            <LazyLoadImage
              src={
                generationImage?.["generation-vii"]?.["ultra-sun-ultra-moon"]
                  ?.front_default
              }
              alt="Pokémon Ultra Sun·Ultra Moon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWrapByGeneration;
