import { capitalize } from 'src/utils';
import { Container, Text } from './styles';

type ChipProps = {
  color: string;
  text: string;
  textColor: string;
};

const Chip: React.FC<ChipProps> = ({ color, text, textColor }) => {
  return (
    <Container color={color} accessibilityLabel="chip">
      <Text color={textColor} testID="chip-text">
        {capitalize(text)}
      </Text>
    </Container>
  );
};

export default Chip;
