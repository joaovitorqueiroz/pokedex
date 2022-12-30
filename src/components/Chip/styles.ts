import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type ContainerProps = {
  color: string;
};

export const Container = styled.View<ContainerProps>`
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  padding: 4px 0px 6px 0px;
`;
export const Text = styled.Text`
  font-size: ${RFValue(11)}px;
  //font-weight: bold;
  color: white;
`;
