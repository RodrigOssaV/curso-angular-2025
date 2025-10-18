import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from '@pokecomponents/pokedex/pokedex.component';
import { PokeMonsterComponent } from '@pokecomponents/poke-monster/poke-monster.component';

const routes: Routes = [
  { path: '', redirectTo: 'labdex', pathMatch: 'full' },
  { path: 'labdex', component: PokedexComponent, title: 'Where trainers begin - PokéLab' },
  { path: 'labdex/:name', component: PokeMonsterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
