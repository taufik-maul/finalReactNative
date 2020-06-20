import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {connect} from 'react-redux';

import Landing from '../Landing';
import Login from '../Login';
import Register from '../Register';
import Profile from '../Profile';

const Stack = createStackNavigator();

const Wrapper = ({auth}) => {
  const StackAuth = () => {
    return (
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
      </Stack.Navigator>
    );
  };

  const StackLogined = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ProfilePage"
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      {auth.user !== null ? <StackLogined /> : <StackAuth />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Wrapper);
