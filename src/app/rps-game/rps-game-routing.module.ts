import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';

const routes: Routes = [
  { path: '', redirectTo: 'game', pathMatch: 'full' }, 
  { path: 'game', component: PersonajesComponent, title: 'Rock, papel & scissor feat Rick and Morty - Battle Royal' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpsGameRoutingModule { }
