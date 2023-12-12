import React, { useEffect, useState } from 'react';
import { Card, Text } from 'react-native-elements'
import firebaseService from '../services/firebaseService';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

interface ProductsProps {
    onAddToCart: (product: any) => void;
    openToast: (message: string) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart, openToast }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const productsResult: any = await firebaseService.getAll('Product')
            setProducts(productsResult)
        }

        fetchData()
    }, [])

    return (
        <View>
            {products.map((product: any) => (
                <Card key={product.id} containerStyle={{ marginBottom: 16, alignItems: 'center' }}>
                    <Card.Title><Text style={{fontSize: 24}}>{product.Name}</Text></Card.Title>
                    <Card.Divider/>
                    <Card.Image
                        source={{ uri: product.Img }}
                        style={{ height: 200 }}
                    />
                    <Text style={{ marginBottom: 10, marginTop: 3, alignSelf: "center" }}>Preço: R$ {product.Price}</Text>
                    <Text style={{ marginBottom: 10, alignSelf: "center" }}>Quantidade: {product.Qnt}</Text>
                    {/* {
                        favorite ? <IconFav onPress={() => {removeFavorite(product), setFavorite(false)}} name="heart" size={28} color="red" style={{ marginBottom: 3, marginTop: 3, alignSelf: "center" }}></IconFav>:
                        <IconFav onPress={() => {setFavorites([...favorites, product]), setFavorite(true)}} name="hearto" size={28} style={{ marginBottom: 3, marginTop: 3, alignSelf: "center" }}></IconFav>
                    } */}
                    <Button onPress={() => {
                        openToast("Produto adicionado ao carrinho!");
                        onAddToCart(product)
                        }} title="Adicionar ao carrinho"/>
                </Card>
            ))}
        </View>
        
    )
}

export default Products;