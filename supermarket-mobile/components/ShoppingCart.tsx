import React, { useState } from 'react';
import { FlatList, Text, View, Alert, ToastAndroid, Platform } from 'react-native';
import styles from '../style/Styles';
import { Card, Button } from 'react-native-elements';
import firebaseService from '../services/firebaseService';

const ShoppingCart = ({ navigation, shoppingCart, setShoppingCart, userEmail }: any) => {

    const showToast = (message: string) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert('Aviso', message);
        }
    };

    const calculateTotal = () => {
        return shoppingCart
            .reduce((total: number, product: any) => {
                const price = parseFloat(product.Price.replace(',', '.'));
                return total + price;
            }, 0)
            .toFixed(2);
    };

    const handleCheckout = async () => {
        if (!userEmail) {
            showToast('Erro: Usuário não autenticado.');
            return;
        }

        try {
            const purchaseData = {
                items: shoppingCart,
                date: new Date().toISOString(),
                total: calculateTotal(),
            };

            await firebaseService.updateUserPurchaseHistory(userEmail, purchaseData);

            showToast('Compra finalizada com sucesso!');

            // 🧹 Esvaziar o carrinho
            setShoppingCart([]);

            // 🔁 Voltar para Home
            navigation.navigate('Home', { userEmail });
        } catch (error) {
            console.error('Erro ao finalizar compra:', error);
            showToast('Erro ao salvar a compra.');
        }
    };

    const renderProductCard = ({ item }: { item: any }) => (
        <Card key={item.id} containerStyle={styles.cardContainer}>
            <>
                <Card.Title style={styles.cardTitle}>{item.Name}</Card.Title>
                <Card.Divider />
                <Text>Preço: R$ {item.Price}</Text>
            </>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={shoppingCart}
                renderItem={renderProductCard}
                keyExtractor={(product) => product.id.toString()}
                ListEmptyComponent={<Text style={styles.totalText}>Carrinho vazio.</Text>}
            />
            <View style={styles.footer}>
                <Text style={styles.totalText}>Total: R$ {calculateTotal()}</Text>
                <Button
                    title="Finalizar Compra"
                    onPress={handleCheckout}
                    buttonStyle={styles.checkoutButton}
                    disabled={shoppingCart.length === 0}
                />
            </View>
        </View>
    );
};

export default ShoppingCart;
