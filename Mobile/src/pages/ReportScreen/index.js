import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { dateToString } from "../../services/dateType";
import { Text as Txt } from "react-native-svg";
import { PieChart } from 'react-native-svg-charts';
import theme from "../../theme";

const ReportScreen = ({ route }) => {
  const { date, title, sentiment, positive, negative, neutral, completeName } = route?.params;
	const emoji = sentiment === "positive" ? require("../../../assets/positiveFeel.png") :
    sentiment === "negative" ? require("../../../assets/negativeFeel.png") : require("../../../assets/neutralFeel.png");
	const desc = sentiment === "positive" ? "foi bom." : sentiment === "negative" ? "não foi tão bom." : "foi normal.";
  const data = [positive, neutral, negative];
  const colors = [theme.color_chart_positive, theme.color_chart_neutral, theme.color_chart_negative];
  const pieData = data.map((value, index) => ({
    value,
    key: `${index}-${value}`,
    svg: {
      fill: colors[index]
    }
  })).filter(item => item.value > 0);

	const Label = ({ slices }) => {
    return slices.map((slice, index) => {
      const {pieCentroid, data} = slice;
      return (
        <Txt
          key={`label-${index}`}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={theme.color_dark10}
          textAnchor={"middle"}
          alignmentBaseline={"middle"}
          fontSize={22}
        >
          {data.value}
        </Txt>
      )
    })
  }

  return <>
    <View style={styles.safe}>
      <Text style={styles.textDate}>{dateToString(date)}</Text>
      <Text style={styles.textTitle}>{title}</Text>
			<Image style={styles.emoji} source={emoji} />
      <Text style={styles.textDesc}>{`Parece que o dia de ${completeName} ${desc}`}</Text>
      <View style={styles.viewChart}>
        <PieChart style={{height: 300, with:300}} data={pieData} >
          <Label />
        </PieChart>
      </View>
      <View style={styles.viewExplainTexts}>
        <Text style={styles.textExplain}>Este gráfico mostra a quantia de palavras 
          <Text style={[styles.textExplain, {color: theme.color_chart_positive, fontWeight: "bold"}]}> positivas</Text>, 
          <Text style={[styles.textExplain, {color: theme.color_chart_neutral, fontWeight: "bold"}]}> neutras </Text>
          (na maioria das vezes estas terão maior número) e
          <Text style={[styles.textExplain, {color: theme.color_chart_negative, fontWeight: "bold"}]}> negativas </Text>
          escritas por 
          <Text style={styles.textExplain}>{` ${completeName} em ${dateToString(date)}.`}</Text>
        </Text>
      </View>
    </View>
  </>
}

export default ReportScreen;