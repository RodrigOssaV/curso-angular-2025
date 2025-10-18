import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WeatherRoutingModule } from './weather-routing.module';

import { FormsModule } from '@angular/forms';
import { IconoClimaComponent } from '@weathercomponents/icono-clima/icono-clima.component';
import { WeatherBackgroundComponent } from '@weathercomponents/weather-background/weather-background.component';
import { WeatherDatetimeComponent } from '@weathercomponents/weather-datetime/weather-datetime.component';
import { WeatherDetailComponent } from '@weathercomponents/weather-detail/weather-detail.component';
import { WeatherPageComponent } from '@weathercomponents/weather-page/weather-page.component';


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
