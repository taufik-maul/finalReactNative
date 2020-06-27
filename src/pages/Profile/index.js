import React, {useState} from 'react';
import {connect} from 'react-redux';
const {View, Text, Button} = require('react-native');
import AUTH_ACTION from '../../stores/actions/auth';
import {query} from '../../services/api';
import {getCustomerData} from '../../services/query';

const Profile = ({navigation, auth, setSign}) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  query(getCustomerData).then((res) => {
    setUser(res.data.customer);
    setIsLoading(false);
  });

  const logout = () => {
    setSign(null);
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading .....</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#FFF',
        margin: 20,
        marginBottom: 0,
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 32,
          marginBottom: 20,
          paddingBottom: 20,
          borderBottomColor: '#F0F0F0',
          borderBottomWidth: 1,
        }}>
        My Profile
      </Text>
      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 12, color: '#C0C0C0', marginBottom: 10}}>
          Your Token: {auth.user.token}
        </Text>
        <Text>
          Name : {user.firstname} {user.lastname}
        </Text>
        <Text>Email : {user.email}</Text>
      </View>
      <Button onPress={() => logout()} title="Logout" />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSign: (data) => dispatch(AUTH_ACTION.set(data)),
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
