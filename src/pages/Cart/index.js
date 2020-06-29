import React from 'react';

const {Text, View} = require('react-native');

const Cart = () => {
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
        Cart
      </Text>
    </View>
  );
};

export default Cart;
