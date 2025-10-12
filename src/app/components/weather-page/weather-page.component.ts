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
  
  date!: string;
  location: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.date = this.getLocalDate();
    this.weatherService.getWeather()
      .subscribe({
        next: (data) => {
          this.weatherData = data;
          this.weatherDataList.push(data);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  searchWeatherLocation() {
    this.weatherService.getLocalWeather(this.location)
      .subscribe({
        next: response => {
          this.weatherData = response;

          if(!this.weatherDataList?.some(we => we.name === response.name)){
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

  getLocalDate() {
    const date = new Date();

    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: false,
    };

    const formatted = date
      .toLocaleString('es-CL', options)
      .replace(',', '') 
      .replace(' ', ' ');

    return formatted;
  }
}
