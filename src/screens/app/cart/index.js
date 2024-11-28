import React, { useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useHooks } from './hooks';
import { Header, Products } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../../store/actions';

export default function Cart(props) {

  const { navigate, goBack } = props.navigation
    const selector = useSelector((state) => state.reducer);
    const dispatch= useDispatch();
    console.log('Cart : ',selector)
  const {} = useHooks();
  useEffect(()=>{
    dispatch(getUserList())
  },[])

  return (
    <ScrollView >
      
    </ScrollView>
  );
}
