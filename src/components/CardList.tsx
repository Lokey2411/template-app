import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardItem from "./CardItem";

type Props = {
	data: string[];
};

const CardList = ({ data }: Props) => {
	return (
		<FlatList
			data={data}
			renderItem={({ item }) => <CardItem item={item} />}
		/>
	);
};

export default CardList;

const styles = StyleSheet.create({});
