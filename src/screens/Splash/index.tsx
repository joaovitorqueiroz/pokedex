import { useNavigation, CommonActions } from '@react-navigation/native';

import Animated, {
  useAnimatedStyle,
  withTiming,
  withSequence,
  runOnJS,
} from 'react-native-reanimated';

import logoPath from '../../assets/logo.png';

import { Container, Image } from './styles';

export function Splash() {
  const navigation = useNavigation();

  function initApp() {
    navigation.dispatch(() =>
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'home' }],
      }),
    );
  }

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: withSequence(
        withTiming(0, { duration: 200 }),
        withTiming(1, { duration: 800 }),
        withTiming(0, { duration: 1000 }),
      ),
      transform: [
        {
          rotate: withSequence(
            withTiming(360 + 'deg', { duration: 1000 }),
            withTiming(0 + 'deg', { duration: 1000 }, () => {
              runOnJS(initApp)();
            }),
          ),
        },
      ],
    };
  });

  return (
    <Container>
      <Animated.View style={logoStyle}>
        <Image source={logoPath} />
      </Animated.View>
    </Container>
  );
}
