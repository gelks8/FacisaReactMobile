import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import FormRegister from './components/FormRegister';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import IconButtons from 'react-native-vector-icons/AntDesign';
import ForgotPassword from './components/ForgotPassword';


const Stack = createStackNavigator();

const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen options={({navigation}) => {
          return {
            headerBackVisible: false,
            headerTitleAlign: "center",
            title: "Ofertas",
            headerLeft: () => (
              <IconButtons onPress={() => (navigation.navigate('shoppingCart'))} name="shoppingcart" size={28}></IconButtons>
            ),
            headerRight: () => (
              <IconButtons onPress={() => (navigation.navigate('login'))} name="logout" size={24}></IconButtons>
            )
          }
        }} name="home" component={Home}></Stack.Screen>
        <Stack.Screen name="formRegister" component={FormRegister} options={{headerTitle: 'Registrar', headerTitleAlign: 'center'}}></Stack.Screen>
        <Stack.Screen name="forgotPassword" component={ForgotPassword} options={{headerTitle: 'Recuperar Senha', headerTitleAlign: 'center'}}></Stack.Screen>
        <Stack.Screen name="shoppingCart" component={ShoppingCart} options={{headerTitle: 'Carrinho de Compras', headerTitleAlign: 'center'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;