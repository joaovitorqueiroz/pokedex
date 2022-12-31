import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icons from 'react-native-vector-icons/Feather';
import { Platform } from 'react-native';
import Color from 'color';

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

  background-color: ${({ theme }) => theme.colors.primary_100};
  border-radius: 10px;
`;

export const IconSearch = styled(Icons).attrs(({ theme }) => ({
  name: 'search',
  size: 24,
  color: Color(theme.colors.text).alpha(0.4).string(),
}))`
  margin-right: 12px;
`;

export const InputText = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: Color(theme.colors.text).alpha(0.4).string(),
}))`
  flex: 1;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;
