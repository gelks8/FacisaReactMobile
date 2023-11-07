import React from 'react';
import { Text, View, Image, TextInput} from 'react-native';
import styles from '../style/Styles';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const navigation = useNavigation();

    const navigateToLogin = () => {
        navigation.navigate('Login' as never);
    }

    const navigateToCarrinho = () => {
        navigation.navigate('Carrinho' as never);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo à loja</Text>
            <View style={{flexDirection: 'row'}}>
            <Button title="Voltar" size="md" buttonStyle={styles.backButton} onPress={navigateToLogin}></Button>
            <Button title="Carrinho" size="md" buttonStyle={styles.carrinhoButton} onPress={navigateToCarrinho}></Button>
            </View>
        </View>
    );
};

export default Home