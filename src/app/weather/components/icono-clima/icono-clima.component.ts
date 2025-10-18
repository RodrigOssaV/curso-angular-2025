import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { WeatherResponse } from '@weather/models/weather';

@Component({
  selector: 'app-icono-clima',
  templateUrl: './icono-clima.component.html',
  styleUrls: ['./icono-clima.component.css'],
})
export class IconoClimaComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() weather!: WeatherResponse;

  icon!: string;

  ngOnInit(): void {
    // console.log(this.weather?.weather);
  }

  ngOnChanges() {
    // console.log(this.weather?.weather);
    if (this.weather) {
      this.weather.weather.map((item) => {
        this.icon = item.icon;
      });
    }
  }

  ngAfterViewInit(): void {
    // console.log(this.weather);
  }
}
