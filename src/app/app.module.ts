import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { FormsModule } from '@angular/forms';
import { CardPersonajeComponent } from './components/card-personaje/card-personaje.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { OrigenesComponent } from './components/origenes/origenes.component';
import { ButtonLucharComponent } from './components/button-luchar/button-luchar.component';
import { ThoughtBubbleComponent } from './components/thought-bubble/thought-bubble.component';
import { ResultadoJuegoComponent } from './components/resultado-juego/resultado-juego.component';
import { ButtonResetComponent } from './components/button-reset/button-reset.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { BiografiaPersonajeComponent } from './components/biografia-personaje/biografia-personaje.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';
import { IconoClimaComponent } from './components/icono-clima/icono-clima.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { WeatherBackgroundComponent } from './components/weather-background/weather-background.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { WeatherDatetimeComponent } from './components/weather-datetime/weather-datetime.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    CardPersonajeComponent,
    PersonajeComponent,
    OrigenesComponent,
    ButtonLucharComponent,
    ThoughtBubbleComponent,
    ResultadoJuegoComponent,
    ButtonResetComponent,
    CustomButtonComponent,
    BiografiaPersonajeComponent,
    NoEncontradoComponent,
    WeatherPageComponent,
    IconoClimaComponent,
    SeparatorComponent,
    WeatherBackgroundComponent,
    WeatherDetailComponent,
    WeatherDatetimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
