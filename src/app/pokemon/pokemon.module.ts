import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SeparatorComponent } from '@components/separator/separator.component';
import { MeasurementsPipe } from '@pipes/measurements.pipe';
import { ZerosPipe } from '@pipes/zeros.pipe';
import { EvolutionCardComponent } from '@pokecomponents/evolution-card/evolution-card.component';
import { EvolutionDetailCardComponent } from '@pokecomponents/evolution-detail-card/evolution-detail-card.component';
import { EvolutionDetailDualCardComponent } from '@pokecomponents/evolution-detail-dual-card/evolution-detail-dual-card.component';
import { MeasurementsComponent } from '@pokecomponents/measurements/measurements.component';
import { PokeAbilitiesComponent } from '@pokecomponents/poke-abilities/poke-abilities.component';
import { PokeCardComponent } from '@pokecomponents/poke-card/poke-card.component';
import { PokeEvolutionsComponent } from "@pokecomponents/poke-evolutions/poke-evolutions.component";
import { PokeImageEvolutionComponent } from "@pokecomponents/poke-image-evolution/poke-image-evolution.component";
import { PokeMonsterComponent } from '@pokecomponents/poke-monster/poke-monster.component';
import { PokeStatsComponent } from '@pokecomponents/poke-stats/poke-stats.component';
import { PokeTypesComponent } from '@pokecomponents/poke-types/poke-types.component';
import { PokedexComponent } from '@pokecomponents/pokedex/pokedex.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

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
    PokeEvolutionsComponent,
    PokeImageEvolutionComponent,
    EvolutionCardComponent,
    EvolutionDetailCardComponent,
    EvolutionDetailDualCardComponent,
    //global-components
    SeparatorComponent,
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
    PokeEvolutionsComponent,
    PokeImageEvolutionComponent,
    EvolutionCardComponent,
    EvolutionDetailCardComponent,
    SeparatorComponent,
    EvolutionDetailDualCardComponent,
  ],
})
export class PokemonModule {}
