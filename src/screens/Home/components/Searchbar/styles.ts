import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icons from 'react-native-vector-icons/Feather';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px;
  ${Platform.OS === 'ios'
    ? css`
        padding: 10px 0px 10px 12px;
      `
    : css`
        padding-left: 12px;
      `}

  background-color: #e9ebf1;
  border-radius: 10px;
`;

export const IconSearch = styled(Icons).attrs(() => ({
  name: 'search',
  size: 24,
}))`
  margin-right: 12px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonSearch = styled.TouchableOpacity``;
