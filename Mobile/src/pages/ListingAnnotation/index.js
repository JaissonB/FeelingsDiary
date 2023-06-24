import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import add from "../../../assets/add.png";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { getStorageData } from "../../services/storage";
import consts from "../../consts";

const ListingAnnotation = () => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, [])

  const getNotes = async () => {
    const auth = await getStorageData('TOKEN');
    await api.get("notes", {
      headers: { "authorization": auth },
    }).then(response => {
      setNotes(response.data);
    }).catch(error => {
      console.error(error.response);
    });
  }

  const DatailAnotation = () => {
    navigation.navigate('CrudAnnotation');
  };

  const Item = ({ title, date, description }) => {
    const day = date.substring(8, 10);
    const month = consts[date?.substring(5, 7)];
    const year = date.substring(0, 4);
    return <>
      <TouchableOpacity onPress={() => { DatailAnotation() }}>
        <View style={styles.itemList}>
          <View style={styles.RigthItem}>
            <Text style={styles.labelDate}>{day}</Text>
            <Text style={styles.labelDate}>{month}</Text>
            <Text style={styles.labelDate}>{year}</Text>
          </View>
          <View style={styles.leftItem}>
            <Text style={styles.labelTitle}>{title}</Text>
            <Text style={styles.labelAnotation}>{description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  }

  return <>
    <View style={styles.safe}>
      {notes ?
        <FlatList
          showsVerticalScrollIndicator={false}
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            <Item
              title={item.title}
              date={item.date}
              description={item.description}
            />
          }
        />
        :
        <Text>Você não possui nenhum registro ainda...</Text>
        //Estilizar melhor este caso
      }
      <TouchableOpacity style={styles.addButton} onPress={() => { DatailAnotation() }}>
        <Image source={add} style={styles.more} />
      </TouchableOpacity>
    </View>
  </>
}

export default ListingAnnotation;