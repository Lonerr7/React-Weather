export type WeatherInfo = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type WeatherState = {
  weatherInfo: null | WeatherInfo;
  currentCity: string;
};

export type WeeklyWeatherItem = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: number;
  pop: number;
  uvi: number;
};

export type WeeklyWeatherState = {
  weatherArr: WeeklyWeatherItem[];
  currentWeatherCard: WeeklyWeatherItem[] | null;
  isActiveBtn: boolean;
};

export type CityCoords = {
  lat: number;
  lng: number;
};

export type SevenDaysResponse = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: WeeklyWeatherItem[];
};

export enum Cities {
  mogilev = 'mogilev',
  minsk = 'minsk',
  kyiv = 'kyiv',
  berlin = 'berlin',
}
