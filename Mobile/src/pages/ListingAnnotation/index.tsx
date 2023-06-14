import React from "react";
import { FlatList, Text, View } from "react-native";

import styles from "./styles";

const ListingAnnotation = () => {

	const tempData = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			dateRegistration: '10/02/2023',
			title: 'First Item',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			dateRegistration: '11/05/2023',
			title: 'Second Item',
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			dateRegistration: '12/06/2023',
			title: 'Third Item',
		},
	];

	type ItemProps = { title: string };

	const Item = ({ title }: ItemProps) => (
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);

	return <>
		<View style={styles.safe}>
			<View style={styles.container}>
				<Text>Diego Gfielda</Text>
				{/* <FlatList
					data={tempData}
					renderItem={({ item }) => <Item title={item.title} />}
					keyExtractor={(item) => item.id}

				/> */}
			</View>
		</View>
	</>
}

export default ListingAnnotation;