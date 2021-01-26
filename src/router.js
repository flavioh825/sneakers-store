import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import Home from './pages/Home';
import Detail from './pages/Detail';

// Components
import Cart from './components/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Detail"
          component={Detail}
          options={{
            headerRight: () => (
              <Cart color='#000' value={1} />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
