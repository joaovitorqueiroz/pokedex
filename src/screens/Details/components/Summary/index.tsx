import React from 'react';
import { ScrollView } from 'react-native';
import Physiology from '../Physiology';
import Stats from '../Stats';

import { Container, Description } from './styles';

const Summary: React.FC = () => {
  return (
    <Container>
      <Description>
        A strange seed was planted on its back at birth. The plant sprout sand
        grows with this POKEMON.
      </Description>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <Physiology />
        <Stats value={45} title={'HP'} />
        <Stats value={45} title={'HP'} />
        <Stats value={45} title={'HP'} />
        <Stats value={45} title={'HP'} />
        <Stats value={45} title={'HP'} />
        <Stats value={45} title={'HP'} />
      </ScrollView>
    </Container>
  );
};

export default Summary;
