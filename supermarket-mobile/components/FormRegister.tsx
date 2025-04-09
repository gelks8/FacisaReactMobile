import React, { useState } from 'react';
import { View, TextInput, Platform, ToastAndroid, Alert } from 'react-native';
import styles from '../style/Styles';
import { Button } from '@rneui/themed';
import firebaseService from '../services/firebaseService';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import app from '../firebaseConfig';
import { getFirestore } from 'firebase/firestore/lite';

const firestore = getFirestore(app);

const FormRegister = ({ navigation }: any) => {
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formPassword, setFormPassword] = useState('');

    const showToast = (message: string) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert('Aviso', message);
        }
    };

    const isValidEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const onSubmit = async () => {
        if (!formName || !formEmail || !formPassword) {
            showToast('Preencha todos os campos');
            return;
        }

        if (!isValidEmail(formEmail)) {
            showToast('Email inválido');
            return;
        }

        if (formPassword.length < 6) {
            showToast('A senha deve ter pelo menos 6 caracteres');
            return;
        }

        try {
            const userRef = collection(firestore, 'Users');
            const q = query(userRef, where('formEmail', '==', formEmail));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                showToast('Já existe um usuário com este e-mail');
                return;
            }

            const data = { formName, formEmail, formPassword };
            const docRef = await firebaseService.save(data, 'Users');

            if (docRef && docRef.id) {
                showToast('Usuário registrado com sucesso!');
                setTimeout(() => navigation.navigate('Login'), 3000);
            } else {
                showToast('Erro ao registrar usuário');
            }

        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            showToast('Erro inesperado ao salvar usuário');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={formName}
                onChangeText={setFormName}
                style={styles.loginInput}
                placeholder="Nome Completo"
                placeholderTextColor="black"
            />
            <TextInput
                value={formEmail}
                onChangeText={setFormEmail}
                style={styles.loginInput}
                placeholder="E-mail"
                placeholderTextColor="black"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                value={formPassword}
                onChangeText={setFormPassword}
                style={styles.loginInput}
                placeholder="Senha"
                placeholderTextColor="black"
                secureTextEntry
            />
            <Button
                title="Registrar"
                size="lg"
                buttonStyle={styles.registerButton}
                onPress={onSubmit}
            />
        </View>
    );
};

export default FormRegister;
