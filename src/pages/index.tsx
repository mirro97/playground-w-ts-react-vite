import { useInfiniteQuery, useQueries, useQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import { getPoketmonListAll } from "../core/apis/pokemonList";
import { useEffect, useState } from "react";
import { group } from "console";
import { Pokemons } from "@/components/pokemon/pokemons";

const MainPage = () => {
  const [ref, isView] = useInView();
  const [pokemonData, setPokemonData] = useState([]);

  const {
    data: pokemonList, // data.pages를 갖고 있는 배열
    error, // error 객체
    fetchNextPage, //  다음 페이지를 불러오는 함수
    hasNextPage, // 다음 페이지가 있는지 여부, Boolean
    isFetching, // 첫 페이지 fetching 여부, Boolean
    isFetchingNextPage, // 추가 페이지 fetching 여부, Boolean
    status, // loading, error, success 중 하나의 상태, string
  } = useInfiniteQuery("pokemonList", getPoketmonListAll, {
    getNextPageParam: (lastPage, page) => {
      const { next } = lastPage;
      if (!next) return undefined;
      return Number(new URL(next).searchParams.get("offset"));
    },
  });

  // 무한 스크롤
  useEffect(() => {
    if (isView && hasNextPage) fetchNextPage();
  }, [isView]);

  return (
    <div>
      {status === "loading" && <p>불러오는 중</p>}
      {status === "error" && <p>{error?.message}</p>}
      {status === "success" && (
        <>
          {/* {pokemonList.pages.map((group, index) =>
            group.results.map((pokemon: PokemonBasic, index: number) => (
              <PokemonCard key={index} pokemonList={pokemon} />
            ))
          )} */}
          {pokemonList.pages.map((group, index) => (
            <Pokemons key={index} pokemons={group.results} />
          ))}
          <div ref={ref}>!!!!!!!!!!</div>
        </>
      )}
    </div>
  );
};

export default MainPage;
