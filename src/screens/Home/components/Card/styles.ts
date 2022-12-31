import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type ContainerProps = {
  backgroundColor: string;
};

export const Container = styled.View<ContainerProps>`
  width: 48%;
  height: 130px;
  margin-top: 20px;
  border-radius: 16px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const PokemonIdContainer = styled.View`
  position: absolute;
  align-self: center;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 8px;
  height: 20px;
  top: -10px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.yellow_400};
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-left: 16px;
  border-radius: 16px;
  overflow: hidden;
`;

export const PokemonId = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

type PokemonNameProps = {
  textColor: string;
};
export const PokemonName = styled.Text<PokemonNameProps>`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  color: ${({ textColor }) => textColor};
`;

export const PokemonTypesContainer = styled.View`
  width: 39%;
  padding-top: 10px;
`;

export const ContainerImages = styled.View`
  top: 35%;
  left: 25%;
  position: absolute;
`;

export const PokeBall = styled.Image`
  left: 35%;
  width: 120px;
  height: 120px;
`;

export const PokemonImage = styled.Image`
  position: absolute;
  top: 5px;
  left: 40%;
  width: 80px;
  height: 80px;
`;
