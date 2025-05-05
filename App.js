import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen";
import TransactionScreen from "./src/screens/TransactionScreen"

const Stack = createStackNavigator ();
export default function App () {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{title:"Controle Financeiro"}}/>
      <Stack.Screen name="Transações" component={TransactionScreen} options={{title:"Transações"}}/>
     </Stack.Navigator>
  </NavigationContainer>
  )
}

{/* <Stack.Screen name="Transações" component={TransactionScreen} options={{title:"Transações"}}/> */}