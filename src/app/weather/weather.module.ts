import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';

import { WeatherPageComponent } from './components/weather-page/weather-page.component';
import { IconoClimaComponent } from './components/icono-clima/icono-clima.component';
import { WeatherBackgroundComponent } from './components/weather-background/weather-background.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { WeatherDatetimeComponent } from './components/weather-datetime/weather-datetime.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WeatherPageComponent,
    IconoClimaComponent,
    WeatherBackgroundComponent,
    WeatherDetailComponent,
    WeatherDatetimeComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    FormsModule
  ],
  exports: [
    IconoClimaComponent,
    WeatherBackgroundComponent,
    WeatherDetailComponent,
    WeatherDatetimeComponent
  ]
})
export class WeatherModule { }
