import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from '@app/models/weather';
import { WeatherService } from '@app/services/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css'],
})
export class WeatherPageComponent implements OnInit {
  weatherData?: WeatherResponse;
  weatherDataList: WeatherResponse[] = [];

  main!: string;
  location: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({
      next: (data) => {
        this.weatherData = data;
        this.weatherDataList.push(data);
        this.main = data.weather[0].main;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  searchWeatherLocation() {
    this.weatherService.getLocalWeather(this.location).subscribe({
      next: (response) => {
        this.weatherData = response;
        this.main = response.weather[0].main;

        if (!this.weatherDataList?.some((we) => we.name === response.name)) {
          if (this.weatherDataList.length >= 10) {
            this.weatherDataList.shift();
          }
          this.weatherDataList.push(response);
        }

        console.log(this.weatherDataList);
        this.location = '';
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
