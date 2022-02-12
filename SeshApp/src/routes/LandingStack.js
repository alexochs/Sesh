import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../components/Login";
import UserCreation from "../components/UserCreation";

const Stack = createStackNavigator();

const LandingStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="UserCreation" component={UserCreation} />
        </Stack.Navigator>
    );
};

export default LandingStack;
