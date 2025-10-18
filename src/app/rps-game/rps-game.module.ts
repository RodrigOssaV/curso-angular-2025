import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RpsGameRoutingModule } from './rps-game-routing.module';

import { FormsModule } from '@angular/forms';
import { BiografiaPersonajeComponent } from "@RPSGameComponents/biografia-personaje/biografia-personaje.component";
import { ButtonLucharComponent } from "@RPSGameComponents/button-luchar/button-luchar.component";
import { ButtonResetComponent } from "@RPSGameComponents/button-reset/button-reset.component";
import { CardPersonajeComponent } from "@RPSGameComponents/card-personaje/card-personaje.component";
import { CustomButtonComponent } from "@RPSGameComponents/custom-button/custom-button.component";
import { PersonajesComponent } from "@RPSGameComponents/personajes/personajes.component";
import { ResultadoJuegoComponent } from "@RPSGameComponents/resultado-juego/resultado-juego.component";

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
