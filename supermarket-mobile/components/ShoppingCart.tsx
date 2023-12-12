import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native';
import styles from '../style/Styles';
import { Card, Button } from 'react-native-elements';

const ShoppingCart = ({route, navigation}: any) => {
    const {shoppingCart} = route.params

    const calculateTotal = () => {
        return shoppingCart.reduce((total: number, product: any) => {
            const price = parseFloat(product.Price.replace(',', '.'));
            return total + price;
        }, 0).toFixed(2);
    };

    const handleCheckout = () => {
        navigation.navigate('Login');
    }
    
    const renderProductCard = ({item}: {item: any}) => (
        <Card key={item.id} containerStyle={styles.cardContainer}>
            <Card.Title style={styles.cardTitle}>{item.Name}</Card.Title>
            <Card.Divider />
            {/* Aqui você pode personalizar a exibição do produto, se necessário */}
            <Text>Preço: R$ {item.Price}</Text>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={shoppingCart}
                renderItem={renderProductCard}
                keyExtractor={(product) => product.id.toString()}
            />
            <View style={styles.footer}>
                <Text style={styles.totalText}>Total: R$ {calculateTotal()}</Text>
                <Button title="Finalizar Compra" onPress={() => {navigation.navigate('Login')}} buttonStyle={styles.checkoutButton} />
            </View>
        </View>
    )
}



export default ShoppingCart