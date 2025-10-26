import { Component, Input, OnChanges } from '@angular/core';
import { Specie } from '@pokemon/models/evolution-chain';

@Component({
  selector: 'app-poke-image-evolution',
  templateUrl: './poke-image-evolution.component.html',
  styleUrls: ['./poke-image-evolution.component.css']
})
export class PokeImageEvolutionComponent implements OnChanges{

  @Input() pokeImageEvolution?: Specie;

  id: number = 1;
  url: string = '';

  ngOnChanges(): void {
    if(this.pokeImageEvolution){
      this.url = this.pokeImageEvolution.url;
      const id_evolutionChain = this.url.split('pokemon-species/')[1].replace('/', '');
      this.id = Number(id_evolutionChain);
    }
  }

}
