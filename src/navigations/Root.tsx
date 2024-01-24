import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../screens/Home";
import Favorite from "../screens/Favorite";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const Root = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
			/>
			<Stack.Screen
				name="Favorite"
				component={Favorite}
			/>
		</Stack.Navigator>
	);
};

export default Root;

const styles = StyleSheet.create({});
