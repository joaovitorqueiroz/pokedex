import { TextInputProps } from 'react-native';
import { Container, IconSearch, InputText } from './styles';

const Searchbar: React.FC<TextInputProps> = props => {
  return (
    <Container>
      <IconSearch />
      <InputText testID="input-text" {...props} />
    </Container>
  );
};

export default Searchbar;
