import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { GenerationResponse, GenerationsResponse } from '@pokemon/models/generation';
import { EvolutionChainResponse } from '@pokemon/models/evolution-chain';
import { Pokemon, PokemonResponse } from '@pokemon/models/pokemon';
import { PokemonSpeciesResponse } from '@pokemon/models/pokemon-species';
import { map, Observable } from 'rxjs';
import { Move, MoveResponse } from '@pokemon/models/move';

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

  getGenerations(): Observable<GenerationsResponse> {
    const generationUrl = `${this.url}/generation`;
    return this.http.get<GenerationsResponse>(generationUrl);
  }

  getGeneration(name: string): Observable<GenerationResponse> {
    const generationsUrl = `${this.url}/generation/${name}`;
    return this.http.get<GenerationResponse>(generationsUrl);
  }

  getMove(name: string): Observable<Move> {
    const moveUrl = `${this.url}/move/${name}`;
    return this.http.get<Move>(moveUrl);
  }
}
