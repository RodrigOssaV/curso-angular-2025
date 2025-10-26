import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PokecomponentsModule } from '@pokecomponents/pokecomponents.module';
import { GenerationDashboardComponent } from '@pokemon/pages/generation-dashboard/generation-dashboard.component';
import { PokeMonsterComponent } from '@pokemon/pages/poke-monster/poke-monster.component';
import { PokedexComponent } from '@pokemon/pages/pokedex/pokedex.component';
import { PokemonRoutingModule } from '@pokemon/pokemon-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    PokedexComponent,
    PokeMonsterComponent,
    GenerationDashboardComponent,
  ],
  imports: [
    CommonModule, 
    PokemonRoutingModule,
    SharedModule,
    PokecomponentsModule,
  ],
  exports: [],
})
export class PokemonModule {}
