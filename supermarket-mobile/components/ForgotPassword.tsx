import React from 'react'
import styles from '../style/Styles';
import { Text, TextInput, View} from 'react-native';
import { Button } from '@rneui/themed';

const ForgotPassword = ({navigation}: any) => {
  return (
    <View style={styles.container}>
        <Text>E-mail</Text>
        <TextInput style={styles.loginInput} placeholder="E-mail" placeholderTextColor="black"/>
        <Text>Senha</Text>
        <TextInput style={styles.loginInput} secureTextEntry={true} placeholder="Senha" placeholderTextColor="black"/>
        <Button title="Recuperar Senha"  size="lg" buttonStyle={styles.registerButton} onPress={() => {navigation.navigate('Login')}}></Button>
    </View>
  )
}

export default ForgotPassword