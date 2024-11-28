import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_to_cart, remove_from_cart } from '../../store/actions';

const Products = ({ products }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer);
    const [itemAdd, setItemAdd] = useState(false);
    useEffect(() => {
        if(products && products.id){
        let result = cartItems.filter((element) => {
            return element.id === products.id
        })
        if (result.length > 0) {
            setItemAdd(true)
        } else {
            setItemAdd(false)
        }
    }
    }, [cartItems,products])
    const handleAddToCart = (item) => {
        dispatch(add_to_cart(item));
    }
    const handleRemoveFromeCart = (item) => {
        dispatch(remove_from_cart(item.id))
    }
    return (
        <View >
            <Image source={products.image} style={{ resizeMode: 'contain' }} />
            <Text style={{ fontSize: 20 }}>Name: {products.name}</Text>
            <Text style={{ fontSize: 20 }}>Price: {products.price}</Text>
            <Text style={{ fontSize: 20 }}>Color: {products.color}</Text>
            <TouchableOpacity onPress={itemAdd ? () => handleRemoveFromeCart(products) : () => handleAddToCart(products)} style={{
                backgroundColor: 'blue',
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20
            }}>
                <Text style={{ fontSize: 20, color: 'white' }}>{itemAdd ? 'Remove from cart' : 'Add to cart'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Products