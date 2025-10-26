import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenerationResponse } from '@pokemon/models/generation';
import { PokemonService } from '@pokemon/services/pokemon.service';
import { NavigationService } from '@shared/services/navigation.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  constructor(
    private router: Router, 
    private pokemonService: PokemonService,
    private navigationService: NavigationService,
  ) {}

  generationsList!: GenerationResponse[];

  loadingTitle: string = 'Loading PokéLab...'
  loadingPokeInformation: boolean = true;

  ngOnInit(): void {
    const gen = this.navigationService.getGeneration();
    console.log('🧬 Volviste desde:', gen);
    this.pokemonService.getGenerations()
      .subscribe({
        next: (response) => {
          const request = response.results.map((r) =>
            this.pokemonService.getGeneration(r.name)
          );

          forkJoin(request)
            .subscribe((generation) => {
              this.generationsList = generation;
              this.loadingPokeInformation = false;
            });
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  goToGeneration(name: string) {
    this.router.navigate(['pokelab/generation', name]);
  }
}
