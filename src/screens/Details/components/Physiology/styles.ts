import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: center;
  flex-direction: row;
`;

export const ContainerInfo = styled.View`
  margin-left: 8%;
  margin-right: 8%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;
