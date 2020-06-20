import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="RegisterPage"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfilePage"
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
