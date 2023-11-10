import React from 'react';
import { Text, View, ScrollView, Image} from 'react-native';
import styles from '../style/Styles';
import { Button, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';

const productList = [
    {id: 0, nome: "Arroz", preco: 4.99, qnt: 1000, img: "https://propao.agilecdn.com.br/2314_1.jpg"},
    {id: 0, nome: "feijão", preco: 6.59, qnt: 1420, img: "https://io.convertiez.com.br/m/trimais/shop/products/images/891/medium/feijao-carioca-tipo-1-broto-legal-pacote-1kg_886.jpg"},
    {id: 0, nome: "Cuscuz", preco: 2.89, qnt: 578, img: "https://ibassets.com.br/ib.item.image.big/b-605a47a63e3c4708a95c063eea0ea3ee.jpeg"},
    {id: 0, nome: "Macarrão", preco: 2.59, qnt: 687, img: "https://redemachado.com.br/arquivos/525930.jpg"},
    {id: 0, nome: "Cafe", preco: 4.59, qnt: 800, img: "https://propao.agilecdn.com.br/5188_1.jpg"},
]

const Home = () => {

    const navigation = useNavigation();

    const navigateToLogin = () => {
        navigation.navigate('Login' as never);
    }

    const navigateToCarrinho = () => {
        navigation.navigate('Carrinho' as never);
    }

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
            <Text style={styles.textTitle}>Bem-vindo à loja</Text>
            {productList.map((product, index) => (
                <Card key={index} containerStyle={{ marginBottom: 16, alignItems: 'center' }}>
                <Image
                source={{ uri: product.img }}
                style={{ height: 200 }}
                resizeMode="cover"
                />
                <Text style={{ marginTop: 10, marginBottom: 10, fontWeight: 'bold' }}>
                    Nome: {product.nome}
                </Text>
                <Text style={{ marginBottom: 10 }}>Preço: {product.preco}</Text>
                <Text style={{ marginBottom: 10 }}>Quantidade: {product.qnt}</Text>
                <Button
                    icon={{ name: 'code', color: '#ffffff' }}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title="Comprar"
                />
                </Card>
            ))}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
                <Button title="Voltar" size="md" buttonStyle={styles.backButton} onPress={navigateToLogin}></Button>
                <Button title="Carrinho" size="md" buttonStyle={styles.carrinhoButton} onPress={navigateToCarrinho}></Button>
            </View>
        </ScrollView>
    );
};

export default Home