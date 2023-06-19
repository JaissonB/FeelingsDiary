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
    {
      id: 'Ad7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      dateRegistration: '10/02/2023',
      title: 'First Item Second',
    },
    {
      id: 'Aac68afc-c605-48d3-a4f8-fbd91aa97f63',
      dateRegistration: '11/05/2023',
      title: 'Second Item Second',
    },
    {
      id: 'A8694a0f-3da1-471f-bd96-145571e29d72',
      dateRegistration: '12/06/2023',
      title: 'Third Item Second',
    },
  ];

  const Item = ({ title, dateRegistration, semana }) => (
    <View style={styles.itemList}>

      <View style={styles.RigthItem}>
        <Text style={styles.title}>{semana}</Text>
      </View>

      <View>
        <Text style={styles.title}>{dateRegistration}</Text>
      </View>

    </View>
  );

  return <>
    <View style={styles.safe}>
      <FlatList
        data={tempData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <Item
            title={item.title}
            dateRegistration={item.dateRegistration}
            semana={'Sex.'} />
        }
      />
    </View>
  </>
}

export default ListingAnnotation;