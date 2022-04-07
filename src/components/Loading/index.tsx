import React from 'react';
import { Container } from './styles';
import { ActivityIndicator } from 'react-native';
const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#505050" />
    </Container>
  );
};
export default Loading;
