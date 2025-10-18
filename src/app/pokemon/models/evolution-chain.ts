export interface EvolutionChainResponse {
  id: number;
  baby_trigger_item: null;
  chain: Chain;
}

export interface Chain {
  evolution_details: EvolutionDetail[];
  evolves_to: EvolvesTo[];
  is_baby: boolean;
  species: Specie;
}

export interface EvolutionDetail {
  base_form_id: null;
  gender: null;
  held_item: null;
  item: {
    name: string;
    url: string;
  } | null;
  known_move: {
    name: string;
    url: string;
  } | null;
  known_move_type: {
    name: string;
    url: string;
  } | null;
  location: {
    name: string;
    url: string;
  } | null;
  min_affection: number | null;
  min_beauty: number | null;
  min_happiness: number | null;
  min_level: number | null;
  needs_overworld_rain: boolean;
  party_species: null;
  party_type: null;
  region_id: null;
  relative_physical_stats: null;
  time_of_day: string;
  trade_species: null;
  trigger: {
    name: string;
    url: string;
  };
  turn_upside_down: boolean;
}

export interface EvolvesTo {
  evolution_details: EvolutionDetail[];
  evolves_to: EvolvesTo[];
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  }
}

export interface Specie {
  name: string;
  url: string;
}