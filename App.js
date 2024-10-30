import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import IntroScreen from "./IntroScreen";

import ScreenA from "./screen/ScreenA";
import ScreenB from "./screen/ScreenB";
import ScreenC from "./screen/ScreenC";
import ScreenD from "./screen/ScreenD";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 1. Tab Navigator (ScreenA, ScreenB, ScreenC, ScreenD 포함)
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HOME") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "SETTING") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "INFO") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "MY") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: { paddingBottom: 5, fontSize: 12 },
      })}
    >
      <Tab.Screen name="HOME" component={ScreenA} />
      <Tab.Screen name="SETTING" component={ScreenB} />
      <Tab.Screen name="INFO" component={ScreenC} />
      <Tab.Screen name="MY" component={ScreenD} />
    </Tab.Navigator>
  );
}

// 2. Stack Navigator 설정 (IntroScreen에서 TabNavigator로 이동)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13b4e4",
    alignItems: "center",
    justifyContent: "center",
  },
});
