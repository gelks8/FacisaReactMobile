import React from 'react';
import { Text, View, Image, TextInput} from 'react-native';
import styles from '../style/Styles';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Carrinho = () => {

    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('Home' as never);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Carrinho</Text>
            <Button title="Voltar"  size="lg" buttonStyle={styles.backButton} onPress={navigateToHome}></Button>
        </View>
    );
};

export default Carrinho