import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {gql} from 'apollo-boost';
import {client, mutate} from '../../services/api';
import {getData, setData} from '../../helper/localStorage';
import {connect} from 'react-redux';
import AUTH_ACTION from '../../stores/actions/auth';

const Login = ({navigation, setSign}) => {
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
        let user = data.generateCustomerTokenCustom;
        console.log(user.token);
        setData('userToken', user.token);
        setIsLoading(false);
        let dataFormat = {
          type: 'signin',
          token: user.token,
        };
        setSign(dataFormat);
        if (user.token !== null) {
          navigation.navigate('ProfilePage');
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        alert('username/password salah cuy');
      });
  };

  const cekToken = () => {
    alert(JSON.stringify(getData('userToken')));
    console.log(JSON.stringify(getData('userToken')));
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
          disabled={(username && password) || !isLoading ? false : true}>
          {isLoading ? (
            <Text
              style={{
                textTransform: 'uppercase',
                textAlign: 'center',
                color: '#FFF',
              }}>
              Loading ...
            </Text>
          ) : (
            <Text
              style={{
                textTransform: 'uppercase',
                textAlign: 'center',
                color: '#FFF',
              }}>
              Login
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#ff843d',
            borderRadius: 6,
            paddingHorizontal: 15,
            paddingVertical: 10,
            marginBottom: 15,
          }}
          onPress={() => cekToken()}>
          <Text
            style={{
              textTransform: 'uppercase',
              textAlign: 'center',
              color: '#FFF',
            }}>
            Cek Token
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSign: (data) => dispatch(AUTH_ACTION.set(data)),
});

export default connect(null, mapDispatchToProps)(Login);
