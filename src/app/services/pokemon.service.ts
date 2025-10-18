import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { GenerationResponse } from '@pokemon/models/generation';
import { EvolutionChainResponse } from '@pokemon/models/evolution-chain';
import { Pokemon, PokemonResponse } from '@pokemon/models/pokemon';
import { PokemonSpeciesResponse } from '@pokemon/models/pokemon-species';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url = environment.pokemonMapUrl;

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<PokemonResponse> {
    const pokemonsUrl = `${this.url}/pokemon/?limit=151`;
    return this.http.get<PokemonResponse>(pokemonsUrl);
  }

  getPokemon(name: string): Observable<Pokemon> {
    const pokemonUrl = `${this.url}/pokemon/${name}`;
    return this.http.get<Pokemon>(pokemonUrl);
  }

  getPokemonSpecies(id: number): Observable<PokemonSpeciesResponse> {
    const pokemonSpeciesUrl = `${this.url}/pokemon-species/${id}`;
    return this.http.get<PokemonSpeciesResponse>(pokemonSpeciesUrl).pipe(
      map((response) => ({
        ...response,
        flavor_text_entries: response.flavor_text_entries.filter(
          (flavor) => flavor.language.name === 'en'
        ),
        genera: response.genera.filter(
          (genera) => genera.language.name === 'en'
        ),
      }))
    );
  }

  getEvolutionChain(id: number): Observable<EvolutionChainResponse> {
    const evolutionChainUrl = `${this.url}/evolution-chain/${id}`;
    return this.http.get<EvolutionChainResponse>(evolutionChainUrl);
  }

  getGeneration(): Observable<GenerationResponse> {
    const generationUrl = `${this.url}/generation`;
    return this.http.get<GenerationResponse>(generationUrl);
  }
}
