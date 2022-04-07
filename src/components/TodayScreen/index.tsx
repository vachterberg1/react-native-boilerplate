import React from 'react';
import {
  Container,
  City,
  Temperature,
  TimeCondition,
  Location,
  WeatherImage,
  CurrentDay,
  MaxAndMinTemperature,
  TextMaxAndMin,
} from './styles';
import { TodayScreenProps } from './types';
import { Text } from 'react-native';
import moment from 'moment';
import verifyIcon from '../../utils/verifyIcon';
import ConditionsWeather from '../ConditionsWeather';
import Loading from '../Loading';

const TodayScreen = ({ weather, isNight }: TodayScreenProps) => {
  const weatherInfos = weather;
  const nightMode = isNight;
  const temperature = Math.round(weatherInfos?.main.temp);
  const maxTemperature = Math.round(weatherInfos?.main.temp_max);
  const minTemperature = Math.round(weatherInfos?.main.temp_min);
  const feelsLike = Math.round(weatherInfos?.main.feels_like);
  const day = moment(weatherInfos?.dt * 1000).format('ddd');
  const currentDate = moment(weatherInfos?.dt * 1000).format('DD/MM');
  const currentSunrise = moment(weatherInfos?.sys.sunrise * 1000).format('HH:mm');
  const currentSunset = moment(weatherInfos?.sys.sunset * 1000).format('HH:mm');
  const getTimezone = moment(weatherInfos?.dt * 1000).format('HH:mm');

  return (
    <Container>
      {!weatherInfos ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Location>
            <City isNight={nightMode}>
              {weatherInfos?.name}, {weatherInfos?.sys.country}
            </City>
          </Location>

          <CurrentDay isNight={nightMode}>
            {day}, {currentDate}, {getTimezone}
          </CurrentDay>

          <WeatherImage source={verifyIcon(weatherInfos?.weather[0].icon)} />
          <Temperature isNight={nightMode}>{temperature}°</Temperature>
          <TimeCondition isNight={nightMode}>{weatherInfos?.weather[0].main}</TimeCondition>

          <MaxAndMinTemperature>
            <TextMaxAndMin isNight={nightMode}>Máx.: {maxTemperature}°</TextMaxAndMin>

            <TextMaxAndMin isNight={nightMode}>Min.: {minTemperature}°</TextMaxAndMin>
          </MaxAndMinTemperature>
          <ConditionsWeather
            wind={weatherInfos?.wind.speed}
            feelsLike={feelsLike}
            sunrise={currentSunrise}
            sunset={currentSunset}
            pressure={weatherInfos?.main.pressure}
            humidity={weatherInfos?.main.humidity}
          />
        </>
      )}
    </Container>
  );
};
export default TodayScreen;
