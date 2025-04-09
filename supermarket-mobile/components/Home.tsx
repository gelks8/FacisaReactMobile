import React from 'react';
import { Text, ScrollView, ToastAndroid, Alert, Platform } from 'react-native';
import { FAB } from '@rneui/themed';
import { Card } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import Products from './Products';
import styles from '../style/Styles';

const Home = ({ navigation, shoppingCart, setShoppingCart, favorites, setFavorites }: any) => {

    const showToast = (message: string) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert('Aviso', message);
        }
    };

    const removeFavorite = (product: any) => {
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].name === product.name) {
                favorites.splice(i, 1);
            }
        }
    };

    const handleAddToCart = (product: any) => {
        showToast('Produto adicionado ao carrinho!');
        setShoppingCart([...shoppingCart, product]);
    };

    const openChat = () => {
        navigation.navigate('Chat');
    };

    return (
        <>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
                <StatusBar backgroundColor='black' />
                <Products onAddToCart={handleAddToCart} openToast={showToast} />
            </ScrollView>
            <FAB
                style={styles.fab}
                visible={true}
                icon={{ name: 'chat', color: 'white' }}
                color="green"
                onPress={openChat}
            />
        </>
    );
};

export default Home;
