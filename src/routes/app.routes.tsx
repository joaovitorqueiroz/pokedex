import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
    </Navigator>
  );
}
