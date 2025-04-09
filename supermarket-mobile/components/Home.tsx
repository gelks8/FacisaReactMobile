import React from 'react';
import { Text, ScrollView, ToastAndroid, Alert, Platform, View } from 'react-native';
import { FAB, Button } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import Products from './Products';
import styles from '../style/Styles';

const Home = ({ navigation, shoppingCart, setShoppingCart, favorites, setFavorites, userEmail }: any) => {

    const showToast = (message: string) => {
        console.log("Toast:", message);
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert('Aviso', message);
        }
    };

    const handleAddToCart = (product: any) => {
        setShoppingCart([...shoppingCart, product]);
    };

    const openChat = () => {
        navigation.navigate('Chat');
    };

    const openCart = () => {
        navigation.navigate('ShoppingCart', {
            shoppingCart: shoppingCart,
            userEmail: userEmail
        });
    };

    return (
        <>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
                <StatusBar backgroundColor='black' />
                <Products onAddToCart={handleAddToCart} openToast={showToast} />
                <Button
                    title="Ir para o Carrinho"
                    onPress={openCart}
                    buttonStyle={{ marginTop: 20, backgroundColor: '#2089DC' }}
                />
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
