export interface PokemonSpeciesResponse {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
  };
  egg_groups: {
    name: string;
    url: string;
  }[];
  evolution_chain: {
    url: string;
  };
  genera: Genera[];
  flavor_text_entries: FlavorTextEntry[];
  gender_rate: number;
  id: number;
  name: string;
  order: number;
}

export interface Genera {
  genus: string;
  language: {
    name: string;
    url: string;
  }
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  }
}