export interface TodayScreenProps {
  weather?: WeatherData;
  isNight?: boolean;
}

export interface WeatherData {
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  dt: number;
  name: string;
  timezone: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  wind: {
    speed: number;
  };
}
