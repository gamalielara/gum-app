import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CardStyleInterpolators} from '@react-navigation/stack';
import GumtrackerScreen from '@src/screen/Gumtracker';
import HomeScreen from '@src/screen/Home';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 450,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 450,
              },
            },
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gumtracker" component={GumtrackerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
