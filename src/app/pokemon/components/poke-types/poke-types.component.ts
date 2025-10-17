import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon, Type } from '@app/pokemon/models/pokemon';

@Component({
  selector: 'app-poke-types',
  templateUrl: './poke-types.component.html',
  styleUrls: ['./poke-types.component.css']
})
export class PokeTypesComponent implements OnChanges{

  @Input() pokeTypes?: Pokemon;

  types!: Type[];

  ngOnChanges(changes: SimpleChanges): void {
    if(this.pokeTypes){
      // console.log(this.pokeTypes);
      this.types = this.pokeTypes.types;
      // console.log(this.types);
    }
  }
}
