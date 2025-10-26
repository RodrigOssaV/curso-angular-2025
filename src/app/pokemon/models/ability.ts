import { FlavorTextEntry } from "@pokemon/models/pokemon-species";

export interface AbilityResponse {
  id: number;
  name: string;
  flavor_text_entries: FlavorTextEntry[];
  effect_entries: {
    effect: string;
    short_effect: string;
    language: {
      name: string;
      url: string;
    }
  }[];
}