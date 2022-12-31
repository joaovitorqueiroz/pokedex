import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from 'screens/Home';
import { Splash } from 'screens/Splash';
import Details from 'screens/Details';

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="splash">
      <Screen
        name="splash"
        component={Splash}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          gestureEnabled: false,
          animation: 'slide_from_right',
        }}
      />
      <Screen
        name="details"
        component={Details}
        options={{
          gestureEnabled: true,
        }}
      />
    </Navigator>
  );
}
