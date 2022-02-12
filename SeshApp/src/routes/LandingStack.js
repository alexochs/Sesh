import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../components/Login";
import UserCreationMail from "../components/UserCreationMail";
import UserCreationName from "../components/UserCreationName";
import UserCreationPicture from "../components/UserCreationPicture";
import UserCreationPassword from "../components/UserCreationPassword";

const Stack = createStackNavigator();

const LandingStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="UserCreationMail" component={UserCreationMail} />
          <Stack.Screen name="UserCreationName" component={UserCreationName} />
          <Stack.Screen name="UserCreationPicture" component={UserCreationPicture} />
          <Stack.Screen name="UserCreationPassword" component={UserCreationPassword} />
        </Stack.Navigator>
    );
};

export default LandingStack;
