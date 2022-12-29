import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from 'screens/Home';
import { Splash } from 'screens/Splash';

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen
        name="splash"
        component={Splash}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen
        name="home"
        component={Home}
        options={{
          gestureEnabled: false,
          animation: 'slide_from_right',
        }}
      />
    </Navigator>
  );
}
