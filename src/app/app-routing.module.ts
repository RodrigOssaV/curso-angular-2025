import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
// import { PersonajeComponent } from './components/personaje/personaje.component';
// import { OrigenesComponent } from './components/origenes/origenes.component';

const routes: Routes = [
  { path: '', redirectTo: 'personajes', pathMatch: 'full' },
  { path: 'personajes', component: PersonajesComponent },
  // { path: 'personaje', component: PersonajeComponent },
  // { path: 'personaje/:id', component: PersonajeComponent },
  // { path: 'origenes', component: OrigenesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
