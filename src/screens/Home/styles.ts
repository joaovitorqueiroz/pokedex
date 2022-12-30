import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;
