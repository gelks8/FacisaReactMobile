import { Text, View, Image, TextInput} from 'react-native';
import styles from '../style/Styles';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


const Login = (): JSX.Element => {

    const navigation = useNavigation();

    const navigateToRegister = () => {
        navigation.navigate('FormRegister' as never);
    }
    
    const navigateToHome = () => {
        navigation.navigate('Home' as never);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Login</Text>
            <TextInput style={styles.loginInput} placeholder="E-mail" placeholderTextColor="#9EA1A4"/>
            <TextInput style={styles.loginInput} placeholder="Senha" placeholderTextColor="#9EA1A4"/>
            <Button title="Entrar" size="lg" buttonStyle={styles.loginButton} onPress={navigateToHome}></Button>
            <Button title="Registrar" size="lg" buttonStyle={styles.registerButton} onPress={navigateToRegister}></Button>
        </View>
    )
}

export default Login