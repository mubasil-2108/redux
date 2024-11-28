import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart, Home } from '../../screens/app';

const AppStack = createNativeStackNavigator();


const AppNavigation = () => {

    return (
        <AppStack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
            <AppStack.Screen name={'Home'} component={Home}/>
            <AppStack.Screen name={'Cart'} component={Cart}/>
        </AppStack.Navigator>
    )
}

export default AppNavigation