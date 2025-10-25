import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PokeExpressInformationComponent } from '@pokemon/components/poke-express-information/poke-express-information.component';
import { PokemonService } from '@services/pokemon.service';

@Component({
  selector: 'app-poke-search-input',
  templateUrl: './poke-search-input.component.html',
  styleUrls: ['./poke-search-input.component.css'],
})
export class PokeSearchInputComponent {
  @ViewChild('express_informacion', { read: ViewContainerRef })
  express_informacion!: ViewContainerRef;

  constructor(private router: Router, private pokeService: PokemonService) {}

  procesarPokemon(valor: string) {
    // console.log(valor);

    this.pokeService.getPokemon(valor).subscribe({
      next: (pokemon) => {
        this.express_informacion.clear();

        this.pokeService.getPokemonSpecies(pokemon.id)
          .subscribe({
            next: pkmSpecies => {
              // console.log(pkmSpecies);
              this.express_informacion.clear();
              const componentExpressInformacion = this.express_informacion.createComponent(PokeExpressInformationComponent);
              componentExpressInformacion.instance.pokemon = pokemon;
              componentExpressInformacion.instance.pokemonSpecie = pkmSpecies;
            },
            error: error => {
              console.error(error)
            }
          })
        

      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
