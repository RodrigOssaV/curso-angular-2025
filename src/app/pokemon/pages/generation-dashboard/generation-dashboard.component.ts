import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '@pokemon/models/pokemon';
import { PokemonService } from '@services/pokemon.service';
import { forkJoin, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-generation-dashboard',
  templateUrl: './generation-dashboard.component.html',
  styleUrls: ['./generation-dashboard.component.css'],
})
export class GenerationDashboardComponent implements OnInit {

  pokemonList!: Pokemon[];
  
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private titleService: Title,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((pm) => pm.get('name')),
        filter((name): name is string => !!name)
      )
      .subscribe((name) => {
        this.getInfoGeneration(name);
        this.titleService.setTitle(`This is ${name}!! - PokéLab`);
      });
  }

  getInfoGeneration(name: string) {
    this.pokemonService.getGeneration(name).subscribe({
      next: response => {
        const request = response.pokemon_species
          .map(pkSp => 
            this.pokemonService.getPokemon(pkSp.name)
              .pipe(
                catchError(error => {
                  // console.warn(`No se pudo obtener info de ${pkSp.name}:`, error);
                  return of(null);
                })
              )
          );

        forkJoin(request)
          .subscribe(pkSp => {
            this.pokemonList = pkSp
              .filter((pokemon): pokemon is Pokemon => pokemon !== null)
              .sort((a, b) => a.id - b.id);
            // console.log(this.pokemonList);
          })
      },
      error: error => {
        console.log(error);
      }
    });
  }

  goToPokemon(name: string){
    this.router.navigate(['/pokelab/labdex', name]);
  }
}
