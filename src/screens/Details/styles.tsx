import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;

const POKE_BALL_SIZE = 200;

type ContainerProps = {
  backgroundColor: string;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const SafeArea = styled(SafeAreaView)`
  padding-top: 46px;
  padding-left: 16px;
  padding-right: 16px;
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex: 1;
`;

export const IdentityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
  elevation: 10;
  margin-top: -50px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PokeBall = styled.Image`
  position: absolute;
  left: ${widthScreen - POKE_BALL_SIZE + 30}px;
  top: ${heightScreen / 2 - POKE_BALL_SIZE}px;
  height: ${POKE_BALL_SIZE}px;
  width: ${POKE_BALL_SIZE}px;
`;

export const PokemonImage = styled.Image.attrs({})`
  position: absolute;
  resize: content;
  top: -50%;
  left: 15%;
  width: 65%;
  height: 60%;
`;

type PokemonNameProps = {
  textColor: string;
};

export const PokemonName = styled.Text<PokemonNameProps>`
  font-size: ${RFValue(26)}px;
  font-weight: 900;
  color: ${({ textColor }) => textColor};
`;

export const PokemonTypesContainer = styled.View`
  flex-direction: row;
  width: 39%;
  padding-top: 10px;
`;
