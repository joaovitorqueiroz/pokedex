import LottieView from 'lottie-react-native';
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={require('../../assets/loading.json')}
        autoPlay
        resizeMode="contain"
        style={{ height: 50 }}
        loop
      />
    </Container>
  );
};

export default Loading;
