import React, {useState} from 'react';
import {getCategoryByKey} from '../../services/query';
import {query} from '../../services/api';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const {Text, Image, View} = require('react-native');

const PLP = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState({
    name: 'Loading....',
  });

  const params = {
    url_key: route.params.key,
  };

  query(getCategoryByKey, params).then((res) => {
    setCategory(res.data.categoryList[0]);
    setIsLoading(false);
  });
  navigation.setOptions({title: category.name});

  const Product = ({data}) => {
    const product = data.item;
    return (
      <TouchableOpacity
        style={{padding: 10, width: '100%'}}
        onPress={() =>
          navigation.navigate('ProductPage', {
            key: product.url_key,
          })
        }>
        <Image
          style={{width: '100%', height: 150, backgroundColor: '#777'}}
          source={{uri: product.small_image.url}}
          resizeMode={'cover'}
        />
        <View style={{padding: 5}}>
          <Text>{product.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return (
      <View style={{padding: 20, margin: 15}}>
        <Text>Loading ...</Text>
      </View>
    );
  }

  return (
    <View>
      <Image
        style={{width: '100%', height: 150, backgroundColor: '#777'}}
        source={{uri: category.image_path}}
        resizeMode={'cover'}
      />
      <View
        style={{
          padding: 15,
          margin: 15,
          marginTop: -20,
          backgroundColor: '#FFF',
          borderRadius: 4,
        }}>
        {category.description ? (
          <Text style={{marginBottom: 10}}>{category.description}</Text>
        ) : (
          <></>
        )}
        <FlatList
          data={category.products.items}
          renderItem={(item) => <Product data={item} />}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          horizontal={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default PLP;
