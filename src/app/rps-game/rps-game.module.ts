import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RpsGameRoutingModule } from './rps-game-routing.module';

import { FormsModule } from '@angular/forms';
import { BiografiaPersonajeComponent } from "./components/biografia-personaje/biografia-personaje.component";
import { ButtonLucharComponent } from "./components/button-luchar/button-luchar.component";
import { ButtonResetComponent } from "./components/button-reset/button-reset.component";
import { CardPersonajeComponent } from "./components/card-personaje/card-personaje.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";
import { ResultadoJuegoComponent } from "./components/resultado-juego/resultado-juego.component";
import { CustomButtonComponent } from "./components/custom-button/custom-button.component";

@NgModule({
  declarations: [
    BiografiaPersonajeComponent,
    ButtonLucharComponent,
    ButtonResetComponent,
    CardPersonajeComponent,
    PersonajesComponent,
    ResultadoJuegoComponent,
    CustomButtonComponent,
  ],
  imports: [
    CommonModule,
    RpsGameRoutingModule,
    FormsModule
  ],
  exports: [
    BiografiaPersonajeComponent,
    ButtonLucharComponent,
    ButtonResetComponent,
    CardPersonajeComponent,
    PersonajesComponent,
    ResultadoJuegoComponent,
    CustomButtonComponent,
  ]
})
export class RpsGameModule { }
