import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from '@pokecomponents/pokedex/pokedex.component';
import { PokeMonsterComponent } from '@pokecomponents/poke-monster/poke-monster.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
  { path: 'pokedex', component: PokedexComponent, title: 'Where trainers begin - PokéLab' },
  { path: 'pokedex/:name', component: PokeMonsterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
