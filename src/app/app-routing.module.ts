import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoEncontradoComponent } from '@components/no-encontrado/no-encontrado.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule) },
  { path: 'battle-royale', loadChildren: () => import('./rps-game/rps-game.module').then(m => m.RpsGameModule) },
  { path: 'pokelab', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
