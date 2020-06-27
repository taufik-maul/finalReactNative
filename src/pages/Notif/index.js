import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {query} from '../../services/api';
import {getNotificationList} from '../../services/query';
import {FlatList} from 'react-native-gesture-handler';

const Notif = ({navigation}) => {
  const [notif, setNotif] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  query(getNotificationList).then((res) => {
    const notification = res.data.customerNotificationList.items;
    setNotif(notification);
    setIsLoading(false);
  });

  if (isLoading) {
    return (
      <View>
        <Text>Loading .....</Text>
      </View>
    );
  }

  const Notification = ({data}) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#F0F0F0',
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <Text>{data.item.subject}</Text>
        <Text>{data.item.unread ? 'Read' : ''}</Text>
      </View>
    );
  };

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
        Notification
      </Text>
      <FlatList
        data={notif}
        keyExtractor={(item) => item.entityId}
        renderItem={(item) => <Notification data={item} />}
      />
    </View>
  );
};

export default Notif;
