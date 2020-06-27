import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

import {connect} from 'react-redux';

import Landing from '../Landing';
import Login from '../Login';
import Register from '../Register';
import Profile from '../Profile';
import Homepage from '../Homepage';
import Cart from '../Cart';
import Notif from '../Notif';
import CLP from '../CLP';
import PLP from '../PLP';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Product') {
              iconName = focused ? 'tag' : 'tag';
            } else if (route.name === 'Notif') {
              iconName = focused ? 'envelope' : 'envelope';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'shopping-cart' : 'shopping-cart';
            } else {
              iconName = focused ? 'user-circle' : 'user-circle';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          activeBackgroundColor: 'tomato',
        }}>
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="Product" component={CLP} />
        <Tab.Screen name="Notif" component={Notif} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      // <Stack.Navigator>
      //   <Stack.Screen
      //     name="Homepage"
      //     component={Homepage}
      //     options={{headerShown: false}}
      //   />
      //   <Stack.Screen name="CartPage" component={Cart} />
      //   <Stack.Screen name="PLP" component={PLP} />
      //   <Stack.Screen name="Notif" component={Notif} />
      // </Stack.Navigator>
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
