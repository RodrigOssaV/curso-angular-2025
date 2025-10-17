import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'city-weather-now', pathMatch: 'full' },
  { path: 'city-weather-now', component: WeatherPageComponent, title: 'Check the weather before your trip - City Weather Now' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
