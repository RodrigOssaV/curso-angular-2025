import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EvolutionCardComponent } from "@pokecomponents/evolution-card/evolution-card.component";
import { EvolutionDetailCardComponent } from "@pokecomponents/evolution-detail-card/evolution-detail-card.component";
import { EvolutionDetailDualCardComponent } from "@pokecomponents/evolution-detail-dual-card/evolution-detail-dual-card.component";
import { MeasurementsComponent } from '@pokecomponents/measurements/measurements.component';
import { NoEvolutionCardComponent } from '@pokecomponents/no-evolution-card/no-evolution-card.component';
import { PokeAbilitiesComponent } from '@pokecomponents/poke-abilities/poke-abilities.component';
import { PokeAbilityDetailComponent } from '@pokecomponents/poke-ability-detail/poke-ability-detail.component';
import { PokeCardComponent } from '@pokecomponents/poke-card/poke-card.component';
import { PokeEvolutionsComponent } from "@pokecomponents/poke-evolutions/poke-evolutions.component";
import { PokeExpressInformationComponent } from '@pokecomponents/poke-express-information/poke-express-information.component';
import { PokeImageEvolutionComponent } from '@pokecomponents/poke-image-evolution/poke-image-evolution.component';
import { PokeMovesComponent } from '@pokecomponents/poke-moves/poke-moves.component';
import { PokeSearchInputComponent } from '@pokecomponents/poke-search-input/poke-search-input.component';
import { PokeStatsComponent } from "@pokecomponents/poke-stats/poke-stats.component";
import { PokeTypesComponent } from '@pokecomponents/poke-types/poke-types.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    EvolutionCardComponent,
    EvolutionDetailCardComponent,
    EvolutionDetailDualCardComponent,
    PokeEvolutionsComponent,
    PokeStatsComponent,
    PokeAbilitiesComponent,
    PokeTypesComponent,
    MeasurementsComponent,
    PokeCardComponent,
    PokeStatsComponent,
    NoEvolutionCardComponent,
    PokeImageEvolutionComponent,
    PokeSearchInputComponent,
    PokeMovesComponent,
    PokeTypesComponent,
    PokeExpressInformationComponent,
    PokeAbilityDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    EvolutionCardComponent,
    EvolutionDetailCardComponent,
    EvolutionDetailDualCardComponent,
    PokeEvolutionsComponent,
    PokeStatsComponent,
    PokeAbilitiesComponent,
    PokeTypesComponent,
    MeasurementsComponent,
    PokeCardComponent,
    PokeStatsComponent,
    NoEvolutionCardComponent,
    PokeImageEvolutionComponent,
    PokeSearchInputComponent,
    PokeMovesComponent,
    PokeTypesComponent,
    PokeExpressInformationComponent,
    PokeAbilityDetailComponent,
  ]
})
export class PokecomponentsModule { }
