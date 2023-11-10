import React from 'react';
import { Text, View, Image, TextInput} from 'react-native';
import styles from '../style/Styles';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const FormRegister = () => {

    const navigation = useNavigation();

    const navigateToLogin = () => {
        navigation.navigate('Login' as never);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Registrar</Text>
            <TextInput style={styles.loginInput} placeholder="Nome Completo" placeholderTextColor="#9EA1A4"/>
            <TextInput style={styles.loginInput} placeholder="E-mail" placeholderTextColor="#9EA1A4"/>
            <TextInput style={styles.loginInput} placeholder="Senha" placeholderTextColor="#9EA1A4"/>
            <Button title="Registrar"  size="lg" buttonStyle={styles.registerButton} onPress={navigateToLogin}></Button>
        </View>
    );
};

export default FormRegister