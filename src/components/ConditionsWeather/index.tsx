import React from 'react';
import { Condition, ConditionContent, TextCondition, TextConditionInfos, Header } from './styles';
import { ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

interface IConditionsWeather {
  wind?: number;
  feelsLike?: number;
  pressure?: number;
  humidity?: number;
  visibility?: number;
  sunrise?: string;
  sunset?: string;
}

const ConditionsWeather = ({
  wind,
  feelsLike,
  pressure,
  humidity,
  sunrise,
  sunset,
}: IConditionsWeather) => {
  return (
    <Condition>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ConditionContent>
          <Header>
            <Feather name="thermometer" size={20} color="#535353" />
            <TextCondition>Thermal Sensation</TextCondition>
          </Header>
          <TextConditionInfos>{feelsLike}°</TextConditionInfos>
        </ConditionContent>

        <ConditionContent>
          <Header>
            <Feather name="sunrise" size={20} color="#535353" />
            <TextCondition>Sunrise</TextCondition>
          </Header>
          <TextConditionInfos>{sunrise}h</TextConditionInfos>
        </ConditionContent>

        <ConditionContent>
          <Header>
            <Feather name="sunset" size={20} color="#535353" />
            <TextCondition>Sunset</TextCondition>
          </Header>
          <TextConditionInfos>{sunset}h</TextConditionInfos>
        </ConditionContent>

        <ConditionContent>
          <Header>
            <Entypo name="water" size={20} color="#535353" />
            <TextCondition>Humidity</TextCondition>
          </Header>
          <TextConditionInfos>{humidity}%</TextConditionInfos>
        </ConditionContent>

        <ConditionContent>
          <Header>
            <Feather name="wind" size={20} color="#535353" />
            <TextCondition>Wind</TextCondition>
          </Header>
          <TextConditionInfos>{wind}km/h</TextConditionInfos>
        </ConditionContent>

        <ConditionContent>
          <Header>
            <Feather name="life-buoy" size={20} color="#535353" />
            <TextCondition>Pressure</TextCondition>
          </Header>
          <TextConditionInfos>{pressure} hPA</TextConditionInfos>
        </ConditionContent>
      </ScrollView>
    </Condition>
  );
};
export default ConditionsWeather;
