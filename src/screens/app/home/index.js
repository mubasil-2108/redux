import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useHooks } from './hooks';
import { Header, Products } from '../../../components';

export default function Home(props) {

  const { navigate, goBack } = props.navigation

  const {
  } = useHooks();

  const products = [
    {
      id: 1,
      name: 'Samsung',
      price: 30000,
      color: 'white',
      image: require('../../../assets/images/images.png')
    },
    {
      id: 2,
      name: 'Apple',
      price: 120000,
      color: 'white',
      image: require('../../../assets/images/images.png')
    },
    {
      id: 3,
      name: 'Nokia',
      price: 25000,
      color: 'white',
      image: require('../../../assets/images/images.png')
    },
    {
      id: 4,
      name: 'Oppo',
      price: 20000,
      color: 'white',
      image: require('../../../assets/images/images.png')
    },
  ]

  return (
    <ScrollView >
      <Header navigation={()=>navigate('Cart')} />

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 29 }}>Redux Section</Text>
        {
          products.map((item) =>
            <View key={item.id} style={{flex:1,marginVertical:10, borderWidth:1, borderColor:'white', borderBottomColor:'orange'}}>
              <Products products={item} />
            </View>
          )
        }
      </View>
    </ScrollView>
  );
}
