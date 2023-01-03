import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 16px;
  flex-direction: row;
  padding-left: 10%;
  padding-right: 10%;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(13)}px;
`;
export const ProgressBarContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  padding-right: 8px;
`;
export const ProgressBar = styled.View`
  border-radius: 10px;
`;
