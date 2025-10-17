import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MeasurementsPipe } from '@pipes/measurements.pipe';
import { ZerosPipe } from '@pipes/zeros.pipe';
import { MeasurementsComponent } from '@pokecomponents/measurements/measurements.component';
import { PokeAbilitiesComponent } from '@pokecomponents/poke-abilities/poke-abilities.component';
import { PokeMonsterComponent } from '@pokecomponents/poke-monster/poke-monster.component';
import { PokeStatsComponent } from '@pokecomponents/poke-stats/poke-stats.component';
import { PokeTypesComponent } from '@pokecomponents/poke-types/poke-types.component';
import { PokedexComponent } from '@pokecomponents/pokedex/pokedex.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokeCardComponent } from './components/poke-card/poke-card.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokeMonsterComponent,
    //pipes
    MeasurementsPipe,
    ZerosPipe,
    //components
    MeasurementsComponent,
    PokeTypesComponent,
    PokeAbilitiesComponent,
    PokeStatsComponent,
    PokeCardComponent,
  ],
  imports: [CommonModule, PokemonRoutingModule],
  exports: [
    PokedexComponent,
    PokeMonsterComponent,
    MeasurementsComponent,
    PokeTypesComponent,
    PokeAbilitiesComponent,
    PokeStatsComponent,
    PokeCardComponent,
  ],
})
export class PokemonModule {}
