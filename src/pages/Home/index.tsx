import React, { useEffect, useState } from 'react';
import { ButtonReload, Container } from './styles';
import axios from 'axios';
import TodayScreen from '../../components/TodayScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import getTimezone from '../../utils/verifyNight';
import moment from 'moment';
import Loading from '../../components/Loading';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';

function Home() {
  const [loc, setLoc] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNight, setIsNight] = useState(false);

  const url = 'https://api.openweathermap.org/data/2.5';

  const callAPI = axios.create({
    baseURL: url,
    timeout: 1000,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLoc(null);
        return;
      }
      const { coords } = await Location.getCurrentPositionAsync();
      setLoc(coords);
    })();
  }, []);

  const fetchAPI = async () => {
    try {
      setIsLoading(true);
      const endpoint = `/weather?lat=${loc.latitude}&lon=${loc.longitude}&units=metric&appid=1ddb266c350a26788f5a3aab63e4814a`;
      const res = await callAPI.get(endpoint);
      setWeather(res.data);
      const currentSunset = moment(weather.sys.sunset * 1000).format('HH:mm');
      if (getTimezone(weather.dt * 1000) < currentSunset) {
        setIsNight(true);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [loc]);

  const reloadScreen = () => {
    fetchAPI();
    console.log('reload', isLoading);
  };

  return (
    <>
      <StatusBar style={isNight ? 'light' : 'dark'} />
      <Container isNight={isNight}>
        <ButtonReload onPress={reloadScreen}>
          <Ionicons name="ios-refresh" size={30} color={isNight ? 'white' : 'black'} />
        </ButtonReload>
        {isLoading ? <Loading /> : <TodayScreen weather={weather} isNight={isNight} />}
      </Container>
    </>
  );
}
export default Home;
