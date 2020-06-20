import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 20,
          margin: 20,
          backgroundColor: '#fff',
          borderRadius: 10,
          textAlign: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            marginBottom: 10,
            textTransform: 'uppercase',
          }}>
          Register
        </Text>
        <Text style={{textAlign: 'center'}}>
          Belom Jadi Boss !! tar maen lagi dah kesini wkwk
        </Text>
        <View
          style={{
            marginTop: 20,
            paddingTop: 10,
            borderTopColor: '#CCC',
            borderTopWidth: 1,
          }}>
          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => navigation.navigate('LandingPage')}>
            <Text style={{textAlign: 'center'}}>Balik Lagi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
