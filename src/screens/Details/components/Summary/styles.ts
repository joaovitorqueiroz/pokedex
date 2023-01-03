import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding-left: 16px;
  padding-right: 16px;
`;

export const Description = styled.Text`
  margin-top: 40px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;
