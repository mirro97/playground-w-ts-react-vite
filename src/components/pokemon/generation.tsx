import { language } from "@/core/recoil/language";
import { PokemonVersionsGeneration } from "@/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRecoilState } from "recoil";
import GenerationImageCard from "../common/generationImageCard";

const ImageWrapByGeneration = (
  generationImage: PokemonVersionsGeneration | undefined
) => {
  return (
    <div className="mt-7">
      {(!!generationImage?.["generation-i"]?.["red-blue"]?.front_default ||
        !!generationImage?.["generation-i"]?.["yellow"]?.front_default) && (
        <div className="mb-7">
          <span>1세대</span>
          <div className="flex flex-wrap">
            <GenerationImageCard
              enTitle="Pokémon Red & Blue"
              koTitle="포켓몬스터 레드·블루"
              src={
                generationImage?.["generation-i"]?.["red-blue"]?.front_default
              }
            />
            <GenerationImageCard
              enTitle="Pokémon Yellow"
              koTitle="포켓몬스터 옐로"
              src={generationImage?.["generation-i"]?.["yellow"]?.front_default}
            />
          </div>
        </div>
      )}
      {(!!generationImage?.["generation-ii"]?.["crystal"]?.front_default ||
        !!generationImage?.["generation-ii"]?.["gold"]?.front_default) && (
        <div className="mb-7">
          <span>2세대</span>
          <div className="flex flex-wrap">
            <GenerationImageCard
              enTitle="Pokémon Crystal"
              koTitle="포켓몬스터 크리스탈"
              src={
                generationImage?.["generation-ii"]?.["crystal"]?.front_default
              }
            />
            <GenerationImageCard
              enTitle="Pokémon Gold·Silver"
              koTitle="포켓몬스터 골드·실버"
              src={generationImage?.["generation-ii"]?.["gold"]?.front_default}
            />
          </div>
        </div>
      )}
      {(!!generationImage?.["generation-iii"]?.["emerald"]?.front_default ||
        !!generationImage?.["generation-iii"]?.["firered-leafgreen"]
          ?.front_default ||
        !!generationImage?.["generation-iii"]?.["ruby-sapphire"]
          ?.front_default) && (
        <div className="mb-7">
          <span>3세대</span>
          <div className="flex flex-wrap">
            <GenerationImageCard
              enTitle="Pokémon Emerald"
              koTitle="포켓몬스터 에메랄드"
              src={
                generationImage?.["generation-iii"]?.["emerald"]?.front_default
              }
            />

            <GenerationImageCard
              enTitle="Pokémon FireRed and LeafGreen"
              koTitle="포켓몬스터 파이어레드·리프그린"
              src={
                generationImage?.["generation-iii"]?.["firered-leafgreen"]
                  ?.front_default
              }
            />

            <GenerationImageCard
              enTitle="Pokémon Ruby and Sapphire"
              koTitle="포켓몬스터 루비·사파이어"
              src={
                generationImage?.["generation-iii"]?.["ruby-sapphire"]
                  ?.front_default
              }
            />
          </div>
        </div>
      )}
      {(!!generationImage?.["generation-iv"]?.["diamond-pearl"]
        ?.front_default ||
        !!generationImage?.["generation-iv"]?.["heartgold-soulsilver"]
          ?.front_default ||
        !!generationImage?.["generation-iv"]?.["platinum"]?.front_default) && (
        <div className="mb-7">
          <span>4세대</span>
          <div className="flex flex-wrap">
            <GenerationImageCard
              enTitle="Pokémon Diamond·Pearl"
              koTitle="포켓몬스터 디아루가·펄기아"
              src={
                generationImage?.["generation-iv"]?.["diamond-pearl"]
                  ?.front_default
              }
            />
            <GenerationImageCard
              enTitle="Pokémon HeartGold·SoulSilver"
              koTitle="포켓몬스터 하트골드·소울실버"
              src={
                generationImage?.["generation-iv"]?.["heartgold-soulsilver"]
                  ?.front_default
              }
            />
            <GenerationImageCard
              enTitle="Pokémon Platinum"
              koTitle="포켓몬스터 기라티나"
              src={
                generationImage?.["generation-iv"]?.["platinum"]?.front_default
              }
            />
          </div>
        </div>
      )}
      {!!generationImage?.["generation-v"]?.["black-white"]?.front_default && (
        <div className="mb-7">
          <span>5세대</span>
          <div className="flex flex-wrap">
            <GenerationImageCard
              enTitle="Pokémon Black·White"
              koTitle="포켓몬스터 블랙·화이트"
              src={
                generationImage?.["generation-v"]?.["black-white"]
                  ?.front_default
              }
            />
          </div>
        </div>
      )}
      {(!!generationImage?.["generation-vi"]?.["omegaruby-alphasapphire"]
        ?.front_default ||
        !!generationImage?.["generation-vi"]?.["x-y"]?.front_default) && (
        <div className="mb-7">
          <span>6세대</span>
          <div className="flex flex-wrap">
            <GenerationImageCard
              enTitle="Pokémon Omega Ruby·Alpha Sapphire"
              koTitle="포켓몬스터 오메가루비·알파사파이어"
              src={
                generationImage?.["generation-vi"]?.["omegaruby-alphasapphire"]
                  ?.front_default
              }
            />
            <GenerationImageCard
              enTitle="Pokémon X·Y"
              koTitle="포켓몬스터 X·Y"
              src={generationImage?.["generation-vi"]?.["x-y"]?.front_default}
            />
          </div>
        </div>
      )}
      {!!generationImage?.["generation-vii"]?.["ultra-sun-ultra-moon"]
        ?.front_default && (
        <div className="mb-7">
          <span>7세대</span>
          <div className="flex flex-wrap">
            <GenerationImageCard
              enTitle="Pokémon Ultra Sun·Ultra Moon"
              koTitle="포켓몬스터 울트라썬·울트라문"
              src={
                generationImage?.["generation-vii"]?.["ultra-sun-ultra-moon"]
                  ?.front_default
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWrapByGeneration;
