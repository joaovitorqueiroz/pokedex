import React from 'react';
import { Chip } from 'src/components';
import { useTheme } from 'styled-components';

import { Container, ContainerInfo, Title } from './styles';

const Physiology: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <ContainerInfo>
        <Title>Weight</Title>
        <Chip color={theme.colors.green_100} textColor="#fff" text={'70cm'} />
      </ContainerInfo>
      <ContainerInfo>
        <Title>Height</Title>
        <Chip color={theme.colors.green_100} textColor="#fff" text={'70cm'} />
      </ContainerInfo>
    </Container>
  );
};

export default Physiology;
