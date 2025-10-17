import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokeMonsterComponent } from './components/poke-monster/poke-monster.component';
import { MeasurementsPipe } from "@app/pipes/measurements.pipe";


@NgModule({
  declarations: [
    PokedexComponent,
    PokeMonsterComponent,
    MeasurementsPipe
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
  ],
  exports: [
    PokedexComponent,
    PokeMonsterComponent
  ]
})
export class PokemonModule { }
