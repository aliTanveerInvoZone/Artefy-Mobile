import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from "./routes";
import Splash from "../components/Auth/Splash";
import Home from "../components/Home/home";
import Auth from "../components/Auth/Authentication";

const MainStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={ROUTES.HOME} screenOptions={{ headerShown: false }}>
      <HomeStack.Screen component={Home} name={ROUTES.HOME} />
    </HomeStack.Navigator>
  );
};

export default function StackNavigator() {
  return (
    <MainStack.Navigator initialRouteName={ROUTES.SPLASH} screenOptions={{ headerShown: false }}>
      <MainStack.Screen component={Splash} name={ROUTES.SPLASH} />
      <MainStack.Screen component={Auth} name={ROUTES.AUTH} />
      <MainStack.Screen component={HomeStackNavigator} name={ROUTES.HOME_STACK} />
    </MainStack.Navigator>
  );
}
