import React from 'react'
import { Text } from 'react-native';

const ShoppingCart = ({route}: any) => {
    const {shoppingCart} = route.params
    return (
        shoppingCart.map((product: any, i: number) => (
            <Text key={i}>{product.name}</Text>
        ))
    )
}

export default ShoppingCart