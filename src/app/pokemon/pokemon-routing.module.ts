import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeMonsterComponent } from '@pokemon/pages/poke-monster/poke-monster.component';
import { PokedexComponent } from '@pokepages/pokedex/pokedex.component';
import { GenerationDashboardComponent } from '@pokepages/generation-dashboard/generation-dashboard.component';

const routes: Routes = [
  // main route http://localhost:4200/pokelab/
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: PokedexComponent, title: 'Where trainers begin - PokéLab' },
  { path: 'generation/:name', component: GenerationDashboardComponent },
  { path: 'labdex/:name', component: PokeMonsterComponent },
  { path: 'pokelab/labdex', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
