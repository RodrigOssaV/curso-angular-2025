import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { WeatherResponse } from '@app/models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private API_KEY = '7368caa1590332e768b72629db46f105';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.url}Concepción&appid=${this.API_KEY}&units=metric`);
  }

  getLocalWeather(localidad: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.url}${localidad}&appid=${this.API_KEY}&units=metric`);
  }
}
