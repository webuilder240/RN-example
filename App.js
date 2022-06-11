import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import CounterScreen from './screens/CounterScreen';
import ModalScreen from './screens/ModalScreeen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Counter" component={CounterScreen} />
          <Stack.Screen name="User" component={UserScreen} options={{ title: "ユーザー画面" }} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal"}}>
          <Stack.Screen name="MyModal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}