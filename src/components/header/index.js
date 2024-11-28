import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Header = ({navigation}) => {
    const cartData = useSelector((state) => state.reducer);
    const [cartItems, setCartItems] = useState(0)
    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData])
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems:'center', justifyContent: 'space-between' }}>
            <View style={{flex:1, marginLeft:5}}>
            <TouchableOpacity onPress={navigation}
            style={{
                backgroundColor: 'blue',
                padding: 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                width:'50%',
            }}>
                <Text style={{ fontSize: 15, padding: 15, textAlign: 'right' }}>Show Cart</Text>
            </TouchableOpacity>
            </View>
            <View >
            <Text style={{ flex:1, fontSize: 30, backgroundColor: 'orange', padding: 15, textAlign: 'right' }}>{cartItems}</Text>
        </View>
        </View>
    )
}

export default Header