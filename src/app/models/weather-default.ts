export interface WeatherDefaultResponse {
  coord: {
    lon: number;
    lat: number;
  }
  weather: WeatherDefault[];
  base: string;
  main: MainDefault;
  visibility: number;
  wind: { 
    speed: number;
    deg: number;
  }
  clouds: {
    all: number;
  }
  dt: number;
  sys: SysDefault;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface WeatherDefault {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainDefault {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface SysDefault {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export const defaultWeatherData: WeatherDefaultResponse = {
  coord: {
    lon: 0,
    lat: 0,
  },
  weather: [
    {
      id: 0,
      main: '---',
      description: '---',
      icon: '---',
    },
  ],
  base: '---',
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    sea_level: 0,
    grnd_level: 0,
  },
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
  },
  clouds: {
    all: 0,
  },
  dt: 0,
  sys: {
    type: 0,
    id: 0,
    country: '---',
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  id: 0,
  name: '---',
  cod: 0,
};
