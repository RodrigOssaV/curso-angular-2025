import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
// import { PersonajeComponent } from './components/personaje/personaje.component';
// import { OrigenesComponent } from './components/origenes/origenes.component';

const routes: Routes = [
  { path: '', redirectTo: 'arena-juego', pathMatch: 'full' },
  { path: 'arena-juego', component: PersonajesComponent },
  { path: '**', component: NoEncontradoComponent },
  // { path: 'personaje', component: PersonajeComponent },
  // { path: 'personaje/:id', component: PersonajeComponent },
  // { path: 'origenes', component: OrigenesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
