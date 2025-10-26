import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Chain } from '@pokemon/models/evolution-chain';
import { Move } from '@pokemon/models/move';
import { Pokemon } from '@pokemon/models/pokemon';
import { FlavorTextEntry, Genera } from '@pokemon/models/pokemon-species';
import { PokemonService } from '@pokemon/services/pokemon.service';
import { NavigationService } from '@shared/services/navigation.service';
import { forkJoin, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-poke-monster',
  templateUrl: './poke-monster.component.html',
  styleUrls: ['./poke-monster.component.css'],
})
export class PokeMonsterComponent implements OnInit, OnDestroy {
  genera?: Genera;
  pokeMonster?: Pokemon;
  evolutionChain?: Chain;
  pokeMovesList!: Move[];
  selectedFlavorText?: FlavorTextEntry;
  flavorTextEntries?: FlavorTextEntry[];

  previousUrl: string | null = null;
  currentUrl: string | null = null;
  genUrl: string | null = null;

  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private titleService: Title,
    private router: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    const gen = this.navigationService.getGeneration();
    this.genUrl = gen;

    this.route.paramMap
      .pipe(
        map((pm) => pm.get('name')),
        filter((name): name is string => !!name)
      )
      .subscribe((name) => {
        this.getInfoPokemon(name);
        this.titleService.setTitle(`This is ${name}!! - PokéLab`);
      });
  }

  getInfoPokemon(name: string) {
    this.pokemonService.getPokemon(name)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          // console.log('getPokemon ', response);
          this.pokeMonster = response;
          const requestMove = response.moves.map((mv => this.pokemonService.getMove(mv.move.name)));

          forkJoin(requestMove)
            .subscribe(movesResponse => {
              this.pokeMovesList = movesResponse;
            })

          this.pokemonService
            .getPokemonSpecies(this.pokeMonster.id)
            .subscribe((pk) => {
              this.genera = pk.genera[0];
              this.flavorTextEntries = pk.flavor_text_entries;
              this.selectedFlavorText = this.flavorTextEntries[0];

              const evolutionChainUrl = pk.evolution_chain.url;
              const id_evolutionChain = evolutionChainUrl
                .split('evolution-chain/')[1]
                .replace('/', '');

              this.pokemonService
                .getEvolutionChain(Number(id_evolutionChain))
                .subscribe({
                  next: (response) => {
                    console.log('getEvolutionChain ', response);
                    this.evolutionChain = response.chain;
                  },
                  error: (error) => {
                    console.log(error);
                  },
                });
            });
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  goBackPokeLab() {
    if (this.genUrl === null) {
      this.router.navigate(['pokelab/index']);
      return;
    }
    this.router.navigate([`pokelab/generation/${this.genUrl}`]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    // console.log('destroy getInfoPokemon');
  }
}
