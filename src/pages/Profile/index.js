import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default ({navigation}) => {
  return (
    <View>
      <Text>My Profile</Text>
      <TouchableOpacity>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
