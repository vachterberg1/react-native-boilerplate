import styled from 'styled-components/native';

interface StyleProps {
  isNight?: boolean;
}

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 0 24px;
`;

export const WeatherImage = styled.Image`
  width: 250px;
  height: 250px;
  margin-top: 16px;
`;

export const Temperature = styled.Text<StyleProps>`
  color: ${({ theme, isNight }) => (isNight ? theme.colors.gray100 : theme.colors.gray700)};
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.normal};
  margin-top: 16px;
`;

export const TimeCondition = styled.Text<StyleProps>`
  color: ${({ theme, isNight }) => (isNight ? theme.colors.gray100 : theme.colors.gray700)};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.normal};
`;

export const Location = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const City = styled.Text<StyleProps>`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.normal};
  color: ${({ theme, isNight }) => (isNight ? theme.colors.gray100 : theme.colors.black100)};
`;

export const CurrentDay = styled.Text<StyleProps>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.normal};
  color: ${({ theme, isNight }) => (isNight ? theme.colors.gray100 : theme.colors.gray700)};
  text-align: left;
  width: 100%;
  margin-top: 2px;
`;

export const MaxAndMinTemperature = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 12px;
`;

export const TextMaxAndMin = styled.Text<StyleProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.normal};
  color: ${({ theme, isNight }) => (isNight ? theme.colors.gray100 : theme.colors.gray700)};
  margin-right: 16px;
`;
