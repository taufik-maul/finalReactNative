import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {gql} from 'apollo-boost';
import {mutate} from '../../services/api';
import {getData, setData} from '../../helper/localStorage';

export default ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('tomo@icube.us');
  const [password, setPassword] = useState('Admin123');

  const login = async () => {
    setIsLoading(true);
    const schema = gql`
      mutation generateCustomerTokenCustom(
        $email: String!
        $password: String!
      ) {
        generateCustomerTokenCustom(username: $email, password: $password) {
          token
        }
      }
    `;

    const params = {
      email: username,
      password: password,
    };

    mutate(schema, params)
      .then((res) => {
        const {data} = res;
        let token = data.generateCustomerTokenCustom;
        setData('userToken', token.token);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 20,
          backgroundColor: '#FFF',
          margin: 20,
          borderRadius: 10,
        }}>
        <TextInput
          placeholder="username/email"
          value={username}
          onChange={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          value={password}
          onChange={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#ff843d',
            borderRadius: 6,
            paddingHorizontal: 15,
            paddingVertical: 10,
            marginBottom: 15,
          }}
          onPress={() => login()}
          disabled={username && password ? false : true}>
          <Text
            style={{
              textTransform: 'uppercase',
              textAlign: 'center',
              color: '#FFF',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
