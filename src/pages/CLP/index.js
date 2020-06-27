import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {query} from '../../services/api';
import {getCategoryList} from '../../services/query';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';

import PLP from '../PLP';
import PDP from '../PDP';

const CLP = ({navigation}) => {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  query(getCategoryList).then((res) => {
    console.log(res);
    setCategoryList(res.data.categoryList[0].children);
    setIsLoading(false);
  });

  const StackCLP = createStackNavigator();

  if (isLoading) {
    return (
      <View>
        <Text>Loading .... </Text>
      </View>
    );
  }

  const Item = ({data, navigation}) => {
    let category = data.item;
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProductListPage', {
              key: category.url_key,
            })
          }
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            borderRadius: 4,
            backgroundColor: '#FFF',
            marginBottom: 5,
          }}>
          <Text>{category.name}</Text>
          <Text style={{fontSize: 10, color: '#C0C0C0'}}>Show Products</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const CategoryScreen = ({navigation}) => {
    return (
      <View style={{padding: 15}}>
        <Text style={{fontSize: 24}}>Category List</Text>
        <View style={{backgroundColor: '#F0F0F0', marginTop: 20}}>
          <FlatList
            data={categoryList}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <Item data={item} navigation={navigation} />}
          />
        </View>
      </View>
    );
  };

  return (
    <StackCLP.Navigator>
      <StackCLP.Screen
        name="CategoryPage"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <StackCLP.Screen name="ProductListPage" component={PLP} />
      <StackCLP.Screen name="ProductPage" component={PDP} />
    </StackCLP.Navigator>
  );
};

export default CLP;
