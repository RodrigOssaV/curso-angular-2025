import { PokemonResult } from "./pokemon";

export interface GenerationsResponse {
  count: number;
  next: null;
  previous: null;
  results: {
    name: string;
    url: string;
  }[]
}

export interface GenerationResponse {
  id: number;
  abilities: [];
  main_region: {
    name: string;
    url: string;
  }
  moves: {
    name: string;
    url: string;
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    }
    name: string;
  }[];
  pokemon_species: PokemonResult[];
  types: {
    name: string;
    url: string;
  }[];
  version_groups: {
    name: string;
    url: string;
  }[]
}