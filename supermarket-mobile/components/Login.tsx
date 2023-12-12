import { Text, View, Image, TextInput} from 'react-native';
import styles from '../style/Styles';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import IconLogo from 'react-native-vector-icons/AntDesign';

const Login = ({navigation}: any) => {

    return (
        <View style={styles.container}>
            <View>
                <IconLogo name="isv" size={150} color="#2089DC"></IconLogo>
                <Text style={styles.textTitle}>Budega</Text>
            </View>
            <Text>Login</Text>
            <TextInput style={styles.loginInput} placeholder="E-mail" placeholderTextColor="black"/>
            <Text>Password</Text>
            <TextInput secureTextEntry={true} style={styles.loginInput} placeholder="Senha" placeholderTextColor="black"/>
            <View style={styles.viewRegisterForgot}>
                <Text onPress={() => {navigation.navigate('FormRegister')}} style={styles.registerForgotLink}>Create Account</Text>
                <Text onPress={() => {navigation.navigate('ForgotPassword')}} style={styles.registerForgotLink}>Forgot Password</Text>
            </View>
            <Button style={styles.loginButton} title="Login" onPress={() => {navigation.navigate('Home')}}></Button>
        </View>
    )
}

export default Login