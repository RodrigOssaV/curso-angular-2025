import { FlavorTextEntry } from "@pokemon/models/pokemon-species";

export interface AbilityResponse {
  id: number;
  name: string;
  flavor_text_entries: FlavorTextEntry[];
}