import { Component, Input, OnChanges } from '@angular/core';
import { WeatherResponse } from '@weather/models/weather';

@Component({
  selector: 'app-weather-background',
  templateUrl: './weather-background.component.html',
  styleUrls: ['./weather-background.component.css'],
})
export class WeatherBackgroundComponent implements OnChanges {
  @Input() weather!: WeatherResponse;

  id!: number;
  icon: string = '800';

  ngOnChanges() {
    // console.log(this.weather?.weather);
    if (this.weather) {
      this.weather.weather.map((item) => {
        this.id = item.id;
        // console.log(this.id);
        this.getURLImageBackground(this.id);
      });
    }
  }

  getURLImageBackground(id: number) {
    // console.log('this is id to search: ', id);

    if (id <= 232) return (this.icon = '211');
    if (id <= 321) return (this.icon = '313');
    if (id <= 531) return (this.icon = '521');
    if (id <= 622) return (this.icon = '601');
    if (id <= 781) return (this.icon = '701');
    if (id === 800) return (this.icon = '800');
    if (id === 801) return (this.icon = '801');
    if (id === 802) return (this.icon = '802');
    if (id <= 804) return (this.icon = '804');
    return (this.icon = '800');
  }
}
