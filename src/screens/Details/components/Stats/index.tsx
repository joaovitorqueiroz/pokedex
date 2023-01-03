import React from 'react';
import * as Progress from 'react-native-progress';
import { capitalize } from 'src/utils';
import { useTheme } from 'styled-components';

import { Container, Title, ProgressBarContainer, Value } from './styles';

type StatsProps = {
  value: number;
  title: string;
};

const Stats: React.FC<StatsProps> = ({ value, title }) => {
  const theme = useTheme();

  function colorPercentageProgress(_value: number) {
    if (_value > 0 && _value < 0.5) {
      return theme?.colors?.danger;
    } else if (_value >= 0.5 && _value <= 0.7) {
      return theme?.colors?.green_300;
    } else {
      return theme?.colors?.success;
    }
  }

  return (
    <Container>
      <Title>{capitalize(title)}</Title>
      <ProgressBarContainer>
        <Value>{value}</Value>
        <Progress.Bar
          progress={value / 100}
          width={150}
          borderWidth={0}
          unfilledColor={theme?.colors?.gray_200}
          color={colorPercentageProgress(value / 100)}
        />
      </ProgressBarContainer>
    </Container>
  );
};

export default Stats;
