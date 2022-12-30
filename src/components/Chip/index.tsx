import { Container, Text } from './styles';

type ChipProps = {
  color: string;
  text: string;
};

const Chip: React.FC<ChipProps> = ({ color, text }) => {
  return (
    <Container color={color}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Chip;
