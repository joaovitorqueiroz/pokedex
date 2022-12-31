import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions, Platform } from 'react-native';

const widthScreen = Dimensions.get('screen').width;

const POKE_BALL_SIZE = 200;

export const Container = styled.View`
  padding-top: 0px;
  ${Platform.OS === 'android' &&
  css`
    padding-top: 30px;
  `}
  padding-left: 16px;
`;

export const TextContent = styled.Text`
  margin-top: 16px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PokeBall = styled.Image`
  position: absolute;
  left: ${widthScreen - 150}px;
  top: -50px;
  height: ${POKE_BALL_SIZE}px;
  width: ${POKE_BALL_SIZE}px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 72px;
`;
