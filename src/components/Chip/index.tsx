import { Container, Text } from './styles';

type ChipProps = {
  color: string;
  text: string;
  textColor: string;
};

const Chip: React.FC<ChipProps> = ({ color, text, textColor }) => {
  return (
    <Container color={color}>
      <Text color={textColor}>{text}</Text>
    </Container>
  );
};

export default Chip;
