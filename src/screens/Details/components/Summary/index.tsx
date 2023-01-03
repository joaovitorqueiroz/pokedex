import React from 'react';
import { ScrollView } from 'react-native';
import Physiology from '../Physiology';
import Stats from '../Stats';
import { PokemonDetails } from 'src/models/PokemonDetails';

import { Container, Description } from './styles';
import { capitalize, formattedText } from 'src/utils';

type SummaryProps = {
  data: PokemonDetails;
};

const Summary: React.FC<SummaryProps> = ({ data }) => {
  return (
    <Container>
      <Description>{capitalize(formattedText(data?.description))}</Description>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <Physiology weight={data?.weight} height={data?.height} />
        {data?.stats &&
          data.stats?.map(item => (
            <Stats
              value={item.base_stat}
              title={item.pokemon_v2_stat.name}
              key={item.pokemon_v2_stat.name}
            />
          ))}
      </ScrollView>
    </Container>
  );
};

export default Summary;
