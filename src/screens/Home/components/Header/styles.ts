import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions, Platform } from 'react-native';

const weightScreen = Dimensions.get('screen').width;

const POKEBALL_SIZE = 200;

export const Container = styled.View`
  padding-top: 0px;
  ${Platform.OS === 'android' &&
  css`
    padding-top: 30px;
  `}
  padding-left: 16px;
`;

export const Title = styled.Text`
  font-weight: 900;
  font-size: ${RFValue(36)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextContent = styled.Text`
  margin-top: 16px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Pokeball = styled.Image`
  position: absolute;
  left: ${weightScreen - 150}px;
  top: -50px;
  height: ${POKEBALL_SIZE}px;
  width: ${POKEBALL_SIZE}px;
`;
