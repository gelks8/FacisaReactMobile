import React, { useState } from 'react';
import { View, ToastAndroid, TextInput} from 'react-native';
import styles from '../style/Styles';
import { Button } from '@rneui/themed';
import firebaseService from '../services/firebaseService';

const FormRegister = ({navigation}: any) => {
    const [formName, setFormName] = useState('')
    const [formEmail, setFormEmail] = useState('')
    const [formPassword, setFormPassword] = useState('')

    const onSubmit = async () => {
        const data = { formName, formEmail, formPassword };
        firebaseService.save(data, 'Users').then(
            (docRef) => {
                if (docRef && docRef.id) {
                    openToast({ type: 'success', text1: 'Formulário salvo com sucesso!' });
                    setTimeout(() => navigation.navigate('Login'), 3000);
                } else {
                    openToast({ type: 'warning', text1: 'Não foi possível salvar o formulário no momento!' });
                }
            },
            (error) => {
                console.error('Erro ao salvar o formulário:', error);
                openToast({ type: 'error', text1: 'Erro ao salvar o formulário!' });
            }
        );
    };

    const openToast = ({ type, text1 }: { type: string; text1: string }) => {
        ToastAndroid.showWithGravityAndOffset(
          text1,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      };
    

    return (
        <View style={styles.container}>
            <TextInput value={formName} onChangeText={(text) => (setFormName(text))} style={styles.loginInput} placeholder="Nome Completo" placeholderTextColor="black"/>
            <TextInput value={formEmail} onChangeText={(text) => (setFormEmail(text))} style={styles.loginInput} placeholder="E-mail" placeholderTextColor="black"/>
            <TextInput value={formPassword} onChangeText={(text) => (setFormPassword(text))} style={styles.loginInput} placeholder="Senha" placeholderTextColor="black"/>
            <Button title="Registrar"  size="lg" buttonStyle={styles.registerButton} onPress={onSubmit}></Button>
        </View>
    );
};

export default FormRegister