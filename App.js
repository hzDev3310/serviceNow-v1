import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Menu from './pages/Menu'
import Navbar from './resources/componets/Navbar'
import Login from './pages/Login'
import data from './resources/data'
import modifyProfil from "./pages/ModifyProfil";
import SignIn from "./pages/signup/SignIn";
import Profil from "./pages/Profil";
import Services from "./resources/componets/Services";

const Stack = createNativeStackNavigator();

function App(props) {
  return (
  
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
     
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} initialParams={{ data: {data} }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Navbar" component={Navbar} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="modifyProfil" component={modifyProfil} />
        <Stack.Screen name="Login" component={Login} initialParams={{ data: {data} }} />
      </Stack.Navigator>
    </NavigationContainer> 
    
   
  );
}

export default App;
