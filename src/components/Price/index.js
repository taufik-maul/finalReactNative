import React from 'react';
const {View, Text} = require('react-native');

const Price = (price) => {
  const currency = price.regular_price.currency;
  const normalPrice = price.regular_price.value.toLocaleString();
  const discountPrice = price.final_price.value.toLocaleString();
  return (
    <View>
      <Text>{`${normalPrice} ${currency}`}</Text>
      <Text>{`${discountPrice} ${currency}`}</Text>
    </View>
  );
};

export default Price;
