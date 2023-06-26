import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, } from "react-native";
import Voice from "@react-native-voice/voice";
import styles from "./styles";
import DatePickerComponent from "../../components/Datepicker";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { dateToString, stringToDate } from "../../services/dateType";
import consts from "../../consts";
import { getStorageData } from "../../services/storage";

const ReportScreen = ({ route }) => {
	const [userName, setUserName] = useState("");
  const { date, title, sentiment, positive, negative, neutral } = route?.params;
	const emoji = sentiment === "positive" ? require("../../../assets/positiveFeel.png") :
    sentiment === "negative" ? require("../../../assets/negativeFeel.png") : require("../../../assets/neutralFeel.png");
	const desc = sentiment === "positive" ? "foi bom." : sentiment === "negative" ? "não foi tão bom." : "foi normal.";

	useEffect(() => {
		async function catchName() {
      const name = await getStorageData('USER_NAME');
			setUserName(name);
    }
		catchName();
	}, [])

  return <>
    <View style={styles.safe}>
      <Text style={styles.textDate}>{dateToString(date)}</Text>
      <Text style={styles.textTitle}>{title}</Text>
			<Image style={styles.emoji} source={emoji} />
      <Text style={styles.textDesc}>{`Parece que o dia de ${userName} ${desc}`}</Text>
    </View>
  </>
}

export default ReportScreen;