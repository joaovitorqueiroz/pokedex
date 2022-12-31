import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding-left: 8px;
  padding-right: 8px;
  justify-content: center;
  border-radius: 10px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.yellow_400};
`;

export const Text = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
