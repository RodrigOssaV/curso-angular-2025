import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '@app/pokemon/models/pokemon';
import { PokemonService } from '@app/services/pokemon.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
  ) { }

  pokemonList!: Pokemon[];
  // pokemonList: Map<string, Pokemon[]> = new Map<string, Pokemon[]>();

  ngOnInit(): void {

    this.pokemonService.getAllPokemons().subscribe({
      next: response => {
        // console.log('getAllPokemons: ', response);
        const request = response.results.map(r => this.pokemonService.getPokemon(r.name));

        forkJoin(request)
          .pipe()
          .subscribe(pokemon => {
            this.pokemonList = pokemon
            // console.log(this.pokemonList);
          })
      },
      error: error => {
        console.log(error);
      }
    })
  }

  goToPokemon(name: string){
    this.router.navigate(['/pokemon/pokedex', name]);
  }
}
