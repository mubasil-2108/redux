import React, { Component, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigation from './app';

import { navigationRef } from './rootNavigation';


const MainStack = createNativeStackNavigator();

export default function Navigation() {
    // const [userType, setUserType] = useState(null);
    const [loading, setLoading] = useState(true)
    // const fetchUserType = async () => {
    //     try {
    //         const storedUserType = await AsyncStorage.getItem('userType');
    //         console.log('Fetched user type:', storedUserType); // Add this line
    //         setUserType(storedUserType);
    //     } catch (error) {
    //         console.error('Error fetching user type:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchUserType(); // Fetch userType when Splash Screen mounts
    // }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 2700);
    // })

    // if (loading)
    //     return <Splash />
    // else
        return (
            <NavigationContainer
                ref={navigationRef}
            >
                <MainStack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName={'AppNavigation'}
                >
                   <MainStack.Screen 
                   name={'AppNavigation'}
                   component={AppNavigation}
                   />
                </MainStack.Navigator>
            </NavigationContainer>
        );
}

