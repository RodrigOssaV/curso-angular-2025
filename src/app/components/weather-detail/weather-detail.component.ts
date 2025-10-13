import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { WeatherResponse } from '@app/models/weather';
import { defaultWeatherData, WeatherDefaultResponse } from '@app/models/weather-default';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css'],
})
export class WeatherDetailComponent implements OnInit, OnChanges {
  @Input() weather!: WeatherResponse;

  dataWeather: WeatherDefaultResponse = defaultWeatherData;;

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.weather) {
      this.dataWeather = this.weather;
    }
  }
}
