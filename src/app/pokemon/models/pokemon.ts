export interface PokemonResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  //cries
  //forms
  //game_indices
  height: number;
  //held_items
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  //past_abilities
  //past_types
  //species
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  }
  is_hidden: boolean;
  slot: number;
}

export interface Move {
  move: {
    name: string;
    url: string;
  }
}

export interface Sprites {
  back_default: string;
  front_default: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}