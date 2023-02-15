export interface PokemonBasic {
  name: string;
  url: string;
}

export interface PokemonAll {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonBasic;
}

export interface PokemonAblities {
  ability: PokemonBasic;
  is_hidden: false;
  slot: number;
}

export interface PokemonGameIndices {
  game_index: string;
  version: { name: string; url: string };
}

export interface PokemonVersion {
  rarity: number;
  version: PokemonBasic;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonDetail {
  abilities: PokemonAblities;
  base_experience: number;
  forms: PokemonBasic;
  game_indices: PokemonGameIndices;
  height: number;
  held_items: {
    items: PokemonBasic;
    version_details: PokemonVersion;
  };
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  // moves: ,
  name: string;
  order: number;
  // past_types: ,
  species: PokemonBasic;
  // sprites: ,
  stats: {
    base_stat: number;
    effort: number;
    stat: PokemonBasic;
  };
  types: PokemonType;
  weight: number;
}

// export type PokemonDetail = {
// abilities: ,
// base_experience: ,
// forms: ,
// game_indices: ,
// height: ,
// held_items: ,
// id: ,
// is_default: ,
// location_area_encounters: ,
// moves: ,
// name: ,
// order: ,
// past_types: ,
// species: ,
// sprites: ,
// stats: ,
// types: ,
// weight: ,
// }

// abilities: (2) [{…}, {…}]
// base_experience: 39
// forms: [{…}]
// game_indices: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// height: 3
// held_items: []
// id: 10
// is_default: true
// location_area_encounters: "https://pokeapi.co/api/v2/pokemon/10/encounters"
// moves: (5) [{…}, {…}, {…}, {…}, {…}]
// name: "caterpie"
// order: 14
// past_types: []
// species: {name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon-species/10/'}
// sprites: {back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png', back_female: null, back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/10.png', back_shiny_female: null, front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png', …}
// stats: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// types: [{…}]
// weight: 29
