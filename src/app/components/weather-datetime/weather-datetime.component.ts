import { Component, OnInit } from '@angular/core';

interface DateType {
  minutes: string;
  day: number;
  hour: string;
  month: string;
  year: string;
  weekday: string;
}

@Component({
  selector: 'app-weather-datetime',
  templateUrl: './weather-datetime.component.html',
  styleUrls: ['./weather-datetime.component.css']
})
export class WeatherDatetimeComponent implements OnInit {

  data: DateType = {
    hour: '---',
    minutes: '---',
    day: 0,
    month: '---',
    year: '---',
    weekday: '---',
  };

  ngOnInit(): void {
    this.data = this.getDate();
  }

  getDate(){
    const date = new Date();
    const hour = this.addZeros(date.getHours());
    const minutes = this.addZeros(date.getMinutes());
    const day = date.getUTCDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.toLocaleString('en-US', { year: '2-digit' });
    const weekday = date.toLocaleString('en-US', { weekday: 'long' })

    const formatDate = {
      hour,
      minutes,
      day,
      month,
      year,
      weekday,
    }

    return formatDate
  }

  addZeros(number: number): string {
    if(number <= 9) return '0' + number;
    return number.toString();

  }

}
