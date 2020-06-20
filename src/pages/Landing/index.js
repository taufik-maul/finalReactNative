import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from 'react-native';

export default ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      style={{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      }}>
      <View
        style={{flex: 1, justifyContent: 'center', flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Image
            source={require('../../assets/images/logo.svg')}
            style={{width: 128, height: 128}}
          />
          <Text
            style={{
              textTransform: 'uppercase',
              textAlign: 'center',
              color: '#FFF',
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            Selamat Datang di Apaan App
          </Text>
        </View>
        <View style={{padding: 10, backgroundColor: '#FFF'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginPage')}
            style={{
              backgroundColor: '#ff843d',
              borderRadius: 6,
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginBottom: 15,
            }}>
            <Text
              style={{
                textTransform: 'uppercase',
                textAlign: 'center',
                color: '#FFF',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterPage')}
            style={{
              backgroundColor: '#FFF',
              borderRadius: 6,
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                textTransform: 'uppercase',
                textAlign: 'center',
                color: '#ff843d',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
