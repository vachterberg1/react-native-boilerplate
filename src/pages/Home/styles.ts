import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

interface Props {
  isNight?: boolean;
}

export const Container = styled.View<Props>`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${({ theme, isNight }) => (isNight ? theme.colors.black100 : '#edf2f7')};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ButtonReload = styled.TouchableOpacity`
  width: 100%;
  margin-top: 48px;
  align-items: flex-end;
  padding: 0 16px;
`;
