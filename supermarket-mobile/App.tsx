import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import FormRegister from './components/FormRegister';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import IconButtons from 'react-native-vector-icons/AntDesign';
import ForgotPassword from './components/ForgotPassword';
import { useState } from 'react';

const App = ()=> {
  const Stack = createStackNavigator();
  const [shoppingCart, setShoppingCart] = useState([])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen options={({navigation}) => {
          return {
            headerBackVisible: false,
            headerTitleAlign: "center",
            title: "Ofertas",
            headerLeft: () => (
              <IconButtons onPress={() => (navigation.navigate('ShoppingCart', {shoppingCart}))} name="shoppingcart" size={28}></IconButtons>
            ),
            headerRight: () => (
              <IconButtons onPress={() => (navigation.navigate('Login'))} name="logout" size={24}></IconButtons>
            )
          }
        }} name="Home">
          {
            () => (
              <Home shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}></Home>
            )
          }
        </Stack.Screen>
        <Stack.Screen name="FormRegister" component={FormRegister} options={{headerTitle: 'Registrar', headerTitleAlign: 'center'}}></Stack.Screen>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerTitle: 'Recuperar Senha', headerTitleAlign: 'center'}}></Stack.Screen>
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{headerTitle: 'Carrinho de Compras', headerTitleAlign: 'center'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;