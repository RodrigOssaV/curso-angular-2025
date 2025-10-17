import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '@app/models/weather';
import { environment } from "@app/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = environment.openWeatherMapUrl;
  private API_KEY = environment.openWeatherMapAPIKEY;

  constructor(private http: HttpClient) { }

  getWeather(): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.url}Concepción&appid=${this.API_KEY}&units=metric`);
  }

  getLocalWeather(localidad: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.url}${localidad}&appid=${this.API_KEY}&units=metric`);
  }
}
