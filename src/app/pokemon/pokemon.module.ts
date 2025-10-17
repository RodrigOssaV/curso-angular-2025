import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MeasurementsPipe } from "@app/pipes/measurements.pipe";
import { PokeMonsterComponent } from '@pokecomponents/poke-monster/poke-monster.component';
import { PokedexComponent } from '@pokecomponents/pokedex/pokedex.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { MeasurementsComponent } from './components/measurements/measurements.component';


@NgModule({
  declarations: [
    PokedexComponent,
    PokeMonsterComponent,
    MeasurementsPipe,
    MeasurementsComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
  ],
  exports: [
    PokedexComponent,
    PokeMonsterComponent,
    MeasurementsComponent
  ]
})
export class PokemonModule { }
