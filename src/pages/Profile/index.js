import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {getData, removeData} from '../../helper/localStorage';
import {connect} from 'react-redux';
import AUTH_ACTION from '../../stores/actions/auth';

const DATA = [
  {
    id: '5eeda831fddf949cb744b151',
    name: 'Guadalupe Marsh',
    gender: 'female',
  },
  {
    id: '5eeda83149e03319441d4811',
    name: 'Tabatha Chavez',
    gender: 'female',
  },
  {
    id: '5eeda8317d466cb154848ea9',
    name: 'Aguilar Fitzgerald',
    gender: 'male',
  },
  {
    id: '5eeda831a36fb87b1b3b8509',
    name: 'Kate Barrera',
    gender: 'female',
  },
  {
    id: '5eeda831ff05c8becc42807e',
    name: 'Wyatt Burt',
    gender: 'male',
  },
  {
    id: '5eeda8312638f90a59465814',
    name: 'Hernandez Barnett',
    gender: 'male',
  },
];

const Profile = ({navigation, setSign, auth}) => {
  const logout = () => {
    setSign(null);
  };

  const Item = ({data}) => {
    const user = data.item;
    return (
      <View style={{marginBottom: 5, flex: 1}}>
        <Text>{user.name}</Text>
        <Text>{user.gender}</Text>
      </View>
    );
  };

  const listDataUser = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: 32,
            marginBottom: 20,
            paddingBottom: 20,
            borderBottomColor: '#F0F0F0',
            borderBottomWidth: 1,
          }}>
          List Data
        </Text>
        <FlatList
          data={DATA}
          renderItem={(item) => <Item data={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };
  return (
    <>
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
        <Text style={{fontSize: 12, color: '#C0C0C0'}}>
          Your Token: {auth.user.token}
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: '#FFF',
          margin: 20,
          borderRadius: 10,
        }}>
        {listDataUser()}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#C0C0C0',
          borderRadius: 6,
          paddingHorizontal: 15,
          paddingVertical: 10,
          margin: 20,
          marginTop: 0,
        }}
        onPress={() => logout()}>
        <Text
          style={{
            textTransform: 'uppercase',
            textAlign: 'center',
            color: '#FFF',
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSign: (data) => dispatch(AUTH_ACTION.set(data)),
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
