import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type ContainerProps = {
  color: string;
  rowGap?: number;
  columnGap?: number;
};

export const Container = styled.View<ContainerProps>`
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ columnGap }) => columnGap ?? 0}px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  padding: 4px 8px 6px 8px;
  margin-right: ${({ rowGap }) => rowGap ?? 0}px;
  //margin-right: 10px;
`;

type TextProps = {
  color: string;
};
export const Text = styled.Text<TextProps>`
  font-size: ${RFValue(11)}px;
  font-weight: 600;
  color: ${({ color }) => color};
`;
