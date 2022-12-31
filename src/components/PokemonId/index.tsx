import React from 'react';
import { formatId } from 'src/utils';

import { Container, Text } from './styles';

type PokemonIdProps = {
  id: number;
};

const PokemonId: React.FC<PokemonIdProps> = ({ id }) => {
  return (
    <Container>
      <Text>{formatId(id || 0)}</Text>
    </Container>
  );
};

export default PokemonId;
