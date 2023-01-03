import { capitalize } from 'src/utils';
import { Container, Text } from './styles';

type ChipProps = {
  color: string;
  text: string;
  textColor: string;
  rowGap?: number;
  columnGap?: number;
};

const Chip: React.FC<ChipProps> = ({
  color,
  text,
  textColor,
  rowGap,
  columnGap,
}) => {
  return (
    <Container
      color={color}
      accessibilityLabel="chip"
      rowGap={rowGap}
      columnGap={columnGap}>
      <Text color={textColor} testID="chip-text">
        {capitalize(text)}
      </Text>
    </Container>
  );
};

export default Chip;
