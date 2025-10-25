import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon, Type } from '@pokemon/models/pokemon';
import { PokemonSpeciesResponse } from '@pokemon/models/pokemon-species';

@Component({
  selector: 'app-poke-express-information',
  templateUrl: './poke-express-information.component.html',
  styleUrls: ['./poke-express-information.component.css'],
})
export class PokeExpressInformationComponent implements OnInit {

  @Input() pokemon!: Pokemon;
  @Input() pokemonSpecie!: PokemonSpeciesResponse;

  bgUrl: string = '';

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    console.log(this.pokemonSpecie, this.pokemon);
    this.getTypeBackground(this.pokemon.types);
  }

  getTypeBackground(type: Type[]) {
    const typeName = type[0].type.name;

    switch (typeName) {
      case 'fire':
        this.bgUrl = 'url("assets/pokemon/bg-types/fire.png")';
        return;
      case 'electric':
        this.bgUrl = 'url("assets/pokemon/bg-types/electric.png")';
        return;
      case 'grass':
        this.bgUrl = 'url("assets/pokemon/bg-types/grass.png")';
        return;
      case 'psychic':
        this.bgUrl = 'url("assets/pokemon/bg-types/psychic.png")';
        return;
      case 'water':
        this.bgUrl = 'url("assets/pokemon/bg-types/water.png")';
        return;
      default:
        this.bgUrl = 'url("assets/pokemon/bg-types/default.jpg")';
        return;
    }
  }

  goPokemon(name: string){
    this.router.navigate(['/pokelab/labdex', name]);
  }
}
