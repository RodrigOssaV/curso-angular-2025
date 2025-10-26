import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '@pokemon/models/pokemon';
import { FlavorTextEntry, Genera } from '@pokemon/models/pokemon-species';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnChanges{

  @Input() pokeCard?: Pokemon;
  @Input() pokeCardGenera?: Genera;
  @Input() pokeCardFlavorText?: FlavorTextEntry;

  pokemon?: Pokemon;
  id: number = 0;
  flavorText: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if(this.pokeCard && this.pokeCardFlavorText){
      // console.log(this.pokeCardFlavorText);
      this.id = this.pokeCard.id;
      this.flavorText = this.pokeCardFlavorText?.flavor_text;
      // console.log(this.flavorText);
    }
  }

}
