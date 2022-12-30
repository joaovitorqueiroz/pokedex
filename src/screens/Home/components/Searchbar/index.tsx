import React from 'react';
import { Container, IconSearch, InputText } from './styles';

const Searchbar: React.FC = () => {
  return (
    <Container>
      <IconSearch />

      <InputText testID="input-text" placeholder={'name or number'} />

      {/* <ButtonSearch testID="button-search" onPress={onPress}>
        <Icon />
      </ButtonSearch> */}
    </Container>
  );
};

export default Searchbar;
