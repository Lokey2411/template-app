import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { FavoriteContext } from "../store/context";

type Props = {
	item: string;
};

const CardItem = ({ item }: Props) => {
	const { favIds, addFav, removeFav } = useContext(FavoriteContext);
	const favoriteHandler = () => {
		const hasFaved = favIds.includes(item);
		if (hasFaved) {
			removeFav(item);
		} else {
			addFav(item);
		}
	};
	return (
		<TouchableOpacity onPress={favoriteHandler}>
			<Text>{item}</Text>
		</TouchableOpacity>
	);
};

export default CardItem;

const styles = StyleSheet.create({});
