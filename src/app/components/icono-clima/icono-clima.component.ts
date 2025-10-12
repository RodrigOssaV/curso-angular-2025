import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { WeatherResponse } from '@app/models/weather';

@Component({
  selector: 'app-icono-clima',
  templateUrl: './icono-clima.component.html',
  styleUrls: ['./icono-clima.component.css'],
})
export class IconoClimaComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() weather!: WeatherResponse;

  main!: string;

  ngOnInit(): void {
    // console.log(this.weather?.weather);
  }

  ngOnChanges() {
    // console.log(this.weather?.weather);
    if (this.weather) {
      this.weather.weather.map((item) => {
        this.main = item.icon;
      });
    }
  }

  ngAfterViewInit(): void {
    // console.log(this.weather);
  }
}
