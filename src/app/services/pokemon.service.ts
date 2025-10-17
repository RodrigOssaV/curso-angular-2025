import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/environments/environment';
import { Pokemon, PokemonResponse } from '@app/pokemon/models/pokemon';
import { PokemonSpeciesResponse } from '@pokemon/models/pokemon-species';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = environment.pokemonMapUrl;

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<PokemonResponse> {
    const characterUrl = `${this.url}/pokemon/?limit=151`;
    return this.http.get<PokemonResponse>(characterUrl);
  }

  getPokemon(name: string): Observable<Pokemon> {
    const characterUrl = `${this.url}/pokemon/${name}`;
    return this.http.get<Pokemon>(characterUrl);
  }

  getPokemonSpecies(id: number): Observable<PokemonSpeciesResponse> {
    const characterUrl = `${this.url}/pokemon-species/${id}`;
    return this.http.get<PokemonSpeciesResponse>(characterUrl)
      .pipe(
        map(response => ({
          ...response,
          flavor_text_entries: response.flavor_text_entries.filter(flavor => flavor.language.name === 'en'),
          genera: response.genera.filter(genera => genera.language.name === 'en'),
        }))
      )
  }
}
