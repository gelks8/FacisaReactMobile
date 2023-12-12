import React from 'react';
import { Text, ScrollView, ToastAndroid} from 'react-native';
import { Button } from '@rneui/themed';
import IconFav from 'react-native-vector-icons/AntDesign';
import { Card } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Products from './Products';

// const productList = [
//     {id: 0, name: "Arroz", price: "4,99", qnt: 1000, description: "test", img: "https://propao.agilecdn.com.br/2314_1.jpg"},
//     {id: 1, name: "feijão", price: "6,59", qnt: 1420, description: "test", img: "https://io.convertiez.com.br/m/trimais/shop/products/images/891/medium/feijao-carioca-tipo-1-broto-legal-pacote-1kg_886.jpg"},
//     {id: 2, name: "Cuscuz", price: "2,89", qnt: 578, description: "test", img: "https://ibassets.com.br/ib.item.image.big/b-605a47a63e3c4708a95c063eea0ea3ee.jpeg"},
//     {id: 3, name: "Macarrão", price: "2,59", qnt: 687, description: "test", img: "https://redemachado.com.br/arquivos/525930.jpg"},
//     {id: 4, name: "Cafe", price: "4,59", qnt: 800, description: "test", img: "https://propao.agilecdn.com.br/5188_1.jpg"},
// ]

const Home = ({shoppingCart, setShoppingCart, favorites, setFavorites}: any) => {

    const openToast = (message: string) => {
        ToastAndroid.show(message, 3000)
    }

    const removeFavorite = (product: any) => {
        for (let i = 0; favorites.lenght; i++) {
            if (favorites[i].name === product.name) {
                favorites.splice(i, 1);
            }
        }
    }

    const handleAddToCart = (product: any) => {
        openToast('Produto adicionado ao carrinho!');
        console.log('ShoppingCart data:', shoppingCart);
        setShoppingCart([...shoppingCart, product]);
    };

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
            <StatusBar backgroundColor='black'/>
            <Products onAddToCart={handleAddToCart} openToast={openToast} />
        </ScrollView>
    );
};

export default Home