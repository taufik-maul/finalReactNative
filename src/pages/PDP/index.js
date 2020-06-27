import React, {useState} from 'react';
import {getProductByKey} from '../../services/query';
import {query} from '../../services/api';
import {Text, View, Image} from 'react-native';
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native-gesture-handler';

const PDP = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({
    name: 'Loading....',
  });
  const [qty, setQty] = useState('1');

  const params = {
    url_key: route.params.key,
  };

  query(getProductByKey, params).then((res) => {
    setProduct(res.data.products.items[0]);
    setIsLoading(false);
  });

  navigation.setOptions({title: product.name});

  if (isLoading) {
    return (
      <View style={{padding: 20, margin: 15}}>
        <Text>Loading ...</Text>
      </View>
    );
  }

  const addToCart = () => {};

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Image
          style={{width: '100%', height: 300}}
          source={{uri: product.image.url}}
        />
        <View
          style={{
            padding: 15,
            margin: 15,
            marginTop: -30,
            backgroundColor: '#FFF',
          }}>
          <Text>SKU: {product.sku}</Text>
          <Text>
            {product.stock_status === 'IN_STOCK' ? (
              <Text>Ready</Text>
            ) : (
              <Text>Out of Stock</Text>
            )}
          </Text>
          <Text>{product.price_range.minimum_price.final_price.value}</Text>
          <Text>{product.description.html}</Text>
        </View>
      </ScrollView>
      <View
        style={{
          padding: 15,
          backgroundColor: '#FFF',
          flexDirection: 'row',
          width: '100%',
        }}>
        <TextInput
          placeholder="Qty"
          value={qty}
          backgroundColor={'#F0F0F0'}
          borderRadius={8}
          width={50}
          textAlign={'center'}
          style={{marginRight: 15}}
          onChange={(text) => setQty(text)}
        />
        <View style={{flex: 2}}>
          <TouchableOpacity
            onPress={() => addToCart()}
            style={{
              width: '100%',
              padding: 15,
              backgroundColor: 'orange',
              textAlign: 'center',
              borderRadius: 8,
            }}>
            <Text style={{textAlign: 'center', color: '#FFF'}}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PDP;
