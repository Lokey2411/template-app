import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoriteContext } from "../store/context";
import CardList from "../components/CardList";

const Favorite = () => {
	const { favIds } = useContext(FavoriteContext);
	return (
		<View style={styles.container}>
			<CardList data={favIds} />
		</View>
	);
};

export default Favorite;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
