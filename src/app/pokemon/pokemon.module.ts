import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MeasurementsPipe } from "@app/pipes/measurements.pipe";
import { PokeMonsterComponent } from '@pokecomponents/poke-monster/poke-monster.component';
import { PokedexComponent } from '@pokecomponents/pokedex/pokedex.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { MeasurementsComponent } from './components/measurements/measurements.component';
import { PokeTypesComponent } from './components/poke-types/poke-types.component';


@NgModule({
  declarations: [
    PokedexComponent,
    PokeMonsterComponent,
    MeasurementsPipe,
    MeasurementsComponent,
    PokeTypesComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
  ],
  exports: [
    PokedexComponent,
    PokeMonsterComponent,
    MeasurementsComponent,
    PokeTypesComponent,
  ]
})
export class PokemonModule { }
