import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '@app/services/pokemon.service';
import { Chain } from '@pokemon/models/evolution-chain';
import { Pokemon } from '@pokemon/models/pokemon';
import { FlavorTextEntry, Genera } from '@pokemon/models/pokemon-species';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-poke-monster',
  templateUrl: './poke-monster.component.html',
  styleUrls: ['./poke-monster.component.css']
})
export class PokeMonsterComponent implements OnInit {

  genera?: Genera;
  pokeMonster?: Pokemon;
  selectedFlavorText?: FlavorTextEntry;
  flavorTextEntries?: FlavorTextEntry[];
  evolutionChain?: Chain;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((pm) => pm.get('name')),
        filter((name): name is string => !!name),
      )
      .subscribe((name) => {
        this.getInfoPokemon(name);
        this.titleService.setTitle(`This is ${name}!! - PokéLab`);
      });
  }

  getInfoPokemon(name: string) {
    this.pokemonService.getPokemon(name).subscribe({
      next: response => {
        // console.log('getPokemon: ', response);
        this.pokeMonster = response;

        this.pokemonService.getPokemonSpecies(this.pokeMonster.id)
          .subscribe(pk => {
            // console.log('getPokemonSpecies: ', pk);
            this.genera = pk.genera[0];
            this.flavorTextEntries = pk.flavor_text_entries;
            this.selectedFlavorText = this.flavorTextEntries[0];
            // console.log(this.selectedFlavorText);

            const evolutionChainUrl = pk.evolution_chain.url;
            const id_evolutionChain = evolutionChainUrl.split('evolution-chain/')[1].replace('/', '');

            this.pokemonService.getEvolutionChain(Number(id_evolutionChain)).subscribe({
              next: response => {
                // console.log('getEvolutionChain: ', response);
                this.evolutionChain = response.chain;
                // console.log(this.evolutionChain);
              },
              error: error => {
                console.log(error);
              }
            })
          })
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
