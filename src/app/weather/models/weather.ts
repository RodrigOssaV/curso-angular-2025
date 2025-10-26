export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  }
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: { 
    speed: number;
    deg: number;
  }
  clouds: {
    all: number;
  }
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}