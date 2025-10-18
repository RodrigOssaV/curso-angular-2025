import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Specie } from '@pokemon/models/evolution-chain';

@Component({
  selector: 'app-evolution-card',
  templateUrl: './evolution-card.component.html',
  styleUrls: ['./evolution-card.component.css']
})
export class EvolutionCardComponent implements OnChanges{

  @Input() evolutionSpecie?: Specie;

  specie!: Specie;

  constructor(private router: Router) {}

  ngOnChanges(): void {
    if(this.evolutionSpecie){
      this.specie = this.evolutionSpecie;
    }
  }

  routerPokemonName(name: string){
    this.router.navigate([`pokelab/labdex/`, name]);
  }
}
