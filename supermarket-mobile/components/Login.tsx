import React, { useState } from 'react';
import { Text, View, TextInput, ToastAndroid, Platform, Alert } from 'react-native';
import styles from '../style/Styles';
import { Button } from '@rneui/themed';
import IconLogo from 'react-native-vector-icons/AntDesign';
import firebaseService from '../services/firebaseService'; // <-- IMPORTANTE

const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const showToast = (message: string) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert('Aviso', message);
        }
    };

    const handleLogin = async () => {
        if (email.trim() === '' || password.trim() === '') {
            showToast('Preencha todos os campos');
            return;
        }

        if (!isValidEmail(email)) {
            showToast('E-mail inválido');
            return;
        }

        try {
            const user = await firebaseService.findUserByEmailAndPassword(email, password);
            if (user) {
                showToast('Login bem-sucedido!');
                navigation.navigate('Home');
            } else {
                showToast('E-mail ou senha incorretos');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            showToast('Erro ao tentar logar');
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <IconLogo name="isv" size={150} color="#2089DC" />
                <Text style={styles.textTitle}>Budega</Text>
            </View>

            <Text>Email</Text>
            <TextInput
                style={styles.loginInput}
                placeholder="E-mail"
                placeholderTextColor="black"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <Text>Senha</Text>
            <TextInput
                secureTextEntry
                style={styles.loginInput}
                placeholder="Senha"
                placeholderTextColor="black"
                value={password}
                onChangeText={setPassword}
            />

            <View style={styles.viewRegisterForgot}>
                <Text onPress={() => navigation.navigate('FormRegister')} style={styles.registerForgotLink}>
                    Create Account
                </Text>
                <Text onPress={() => navigation.navigate('ForgotPassword')} style={styles.registerForgotLink}>
                    Forgot Password
                </Text>
            </View>

            <Button
                style={styles.loginButton}
                title="Login"
                onPress={handleLogin}
            />
        </View>
    );
};

export default Login;
