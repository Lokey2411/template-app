import { StyleSheet, View } from "react-native";
import React from "react";
import CardList from "../components/CardList";

const Home = () => {
	return (
		<View style={styles.container}>
			<CardList data={["iphone 13", "iphone 14", "iphone 15"]} />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
