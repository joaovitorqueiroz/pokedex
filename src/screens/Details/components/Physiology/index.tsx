import React from 'react';
import { Chip } from 'src/components';
import { useTheme } from 'styled-components';

import { Container, ContainerInfo, Title } from './styles';

type PhysiologyProps = {
  weight: number | undefined;
  height: number | undefined;
};

const Physiology: React.FC<PhysiologyProps> = ({ weight, height }) => {
  const theme = useTheme();

  return (
    <Container>
      <ContainerInfo>
        <Title>Weight</Title>
        <Chip
          color={theme.colors.green_100}
          textColor="#fff"
          text={`${(weight || 0) / 10}kg`}
        />
      </ContainerInfo>
      <ContainerInfo>
        <Title>Height</Title>
        <Chip
          color={theme.colors.green_100}
          textColor="#fff"
          text={`${(height || 0) / 10}m`}
        />
      </ContainerInfo>
    </Container>
  );
};

export default Physiology;
