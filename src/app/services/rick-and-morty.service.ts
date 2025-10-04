import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Character,
  CharacterResponse,
  Episode,
  Origin,
} from '@app/models/character';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private url = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getOneCharacter(id: number): Observable<Character> {
    const characterUrl = `${this.url}/character/${id}`;
    return this.http.get<Character>(characterUrl);
  }

  getCharacters(): Observable<Character[]> {
    const charactersUrl = `${this.url}/character`;
    return this.http
      .get<CharacterResponse>(charactersUrl)
      .pipe(map((response) => response.results));
  }

  getOrigenes(): Observable<Origin[]> {
    const characterUrl = `${this.url}/character/`;
    return this.http.get<CharacterResponse>(characterUrl).pipe(
      map((resp) => resp.results),
      map((per) => per.map((p) => p.origin)),
      map((origenes) =>
        Array.from(new Map(origenes.map((o) => [o.name, o])).values())
      )
    );
  }

  getEpisode(url: string): Observable<Episode> {
    return this.http.get<Episode>(url).pipe(
      map((e) => ({
        ...e,
        url,
        episode_number: e.air_date.slice(1, 3),
        season: e.air_date.slice(4, 6),
      }))
    );
  }
}
