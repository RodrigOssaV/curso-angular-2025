import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '@app/pokemon/models/pokemon';
import { PokemonService } from '@app/services/pokemon.service';
import { FlavorTextEntry, Genera } from '@pokemon/models/pokemon-species';
import { filter, map } from 'rxjs/operators';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-poke-monster',
  templateUrl: './poke-monster.component.html',
  styleUrls: ['./poke-monster.component.css']
})
export class PokeMonsterComponent implements OnInit {

  pokeMonster?: Pokemon;

  genera?: Genera;
  flavorTextEntries?: FlavorTextEntry[];
  selectedFlavorText?: FlavorTextEntry;

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
        // console.log(name);
        // this.id = id;
        this.getInfoPokemon(name);
        this.titleService.setTitle(`This is ${name}!! - PokéLab`);
      });
  }

  getInfoPokemon(name: string) {
    this.pokemonService.getPokemon(name).subscribe({
      next: response => {
        console.log('getPokemon: ', response);
        this.pokeMonster = response;

        this.pokemonService.getPokemonSpecies(this.pokeMonster.id)
          .subscribe(pk => {
            console.log('getPokemonSpecies: ', pk);
            this.genera = pk.genera[0];
            this.flavorTextEntries = pk.flavor_text_entries;
            this.selectedFlavorText = this.flavorTextEntries[0];
            // console.log(this.selectedFlavorText);
          })
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
