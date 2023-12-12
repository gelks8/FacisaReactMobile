import React from 'react';
import { Text, View, Image, TextInput} from 'react-native';
import styles from '../style/Styles';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const FormRegister = ({navigation}: any) => {

    return (
        <View style={styles.container}>
            <TextInput style={styles.loginInput} placeholder="Nome Completo" placeholderTextColor="black"/>
            <TextInput style={styles.loginInput} placeholder="E-mail" placeholderTextColor="black"/>
            <TextInput style={styles.loginInput} placeholder="Senha" placeholderTextColor="black"/>
            <Button title="Registrar"  size="lg" buttonStyle={styles.registerButton} onPress={() => {navigation.navigate('Login')}}></Button>
        </View>
    );
};

export default FormRegister