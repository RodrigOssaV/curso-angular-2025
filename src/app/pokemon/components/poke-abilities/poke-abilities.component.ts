import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ability, Pokemon } from '@app/pokemon/models/pokemon';

@Component({
  selector: 'app-poke-abilities',
  templateUrl: './poke-abilities.component.html',
  styleUrls: ['./poke-abilities.component.css']
})
export class PokeAbilitiesComponent implements OnChanges{

  @Input() pokeAbilities?: Pokemon;

  abilities?: Ability[];

  ngOnChanges(changes: SimpleChanges): void {
    if(this.pokeAbilities){
      // console.log(this.pokeAbilities.abilities);
      this.abilities = this.pokeAbilities.abilities;
    }
  }

}
