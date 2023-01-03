import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Description = styled.Text`
  padding-left: 16px;
  padding-right: 8px;
  margin-top: 40px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;
