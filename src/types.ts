export type PokemonHome = {
  name: string;
  url: string;
};

export type PokemonAll = {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonHome;
};
