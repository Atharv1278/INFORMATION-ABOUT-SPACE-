import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import alphacencury from './screens/alphacencury';
import solarSystem from './screens/solarSystem';
import Issinformation from './screens/Issinformation';
import Mars from './screens/Mars';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="alphacencury" component={alphacencury} />
        <Stack.Screen name="solarSystem" component={solarSystem} />
        <Stack.Screen name="Issinformation" component={Issinformation} />
        <Stack.Screen name="Mars" component={Mars} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
