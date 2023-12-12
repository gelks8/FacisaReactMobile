import React from 'react'
import { Text, ScrollView } from 'react-native';

const Favorites = ({favorites, setFavorites}: any) => {
    return (
        <ScrollView>
          {favorites.map((product: any, i: number) => (
            <Text key={i}>{product.name}</Text>
          ))}
        </ScrollView>
      );
}

export default Favorites