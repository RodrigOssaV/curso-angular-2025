import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '@pokemon/models/pokemon';
import { PokemonService } from '@pokemon/services/pokemon.service';
import { forkJoin, of, Subject } from 'rxjs';
import { catchError, filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-generation-dashboard',
  templateUrl: './generation-dashboard.component.html',
  styleUrls: ['./generation-dashboard.component.css'],
})
export class GenerationDashboardComponent implements OnInit, OnDestroy {

  pokemonList!: Pokemon[];

  loadingTitle: string = 'Loading Labdex...'
  loadingPokeInformation: boolean = true;

  private destroy$ = new Subject<void>();
  
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
    this.pokemonService.getGeneration(name)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
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
              this.loadingPokeInformation = false;
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    // console.log('destroy getInfoGeneration');
  }

  goBackPokeLab() {
    this.router.navigate(["pokelab/index"]);
  }
}
