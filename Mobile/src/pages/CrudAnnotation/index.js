import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, } from "react-native";
import Voice from "@react-native-voice/voice";
import styles from "./styles";
import DatePickerComponent from "../../components/Datepicker";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { stringToDate } from "../../services/dateType";

const CrudAnnotation = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [result, setResult] = useState('');
  const [audioError, setAudioError] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());

  Voice.onSpeechStart = () => setIsRecording(true);
  Voice.onSpeechEnd = () => setIsRecording(false);
  Voice.onSpeechError = (error) => setAudioError(error.error);
  Voice.onSpeechResults = (result) => setResult(result.value[0]);

  useEffect(() => {
    const newDescription = description.trim() ? description + ". " + result : result;
    setDescription(newDescription);
  }, [result])

  const startRecording = async () => {
    try {
      await Voice.start('pt-BR');
    } catch (error) {
      setAudioError(error);
    }
  }

  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      setAudioError(error);
    }
  }

  const createNote = async () => {
    const body = {
      title: title,
      description: description,
      date: stringToDate(date)
    }
    console.log(body)
    await api.post("notes", body).then(response => {
      console.log(response);
      navigation.navigate("RoutesDrawer");
    }).catch(error => {
      console.error("CrudAnnotation Error", error.response.data);
    });
  }

  return <>
    <View style={styles.safe}>
      <View style={styles.ViewText}>
        <View style={styles.componentNavigation}>
          <DatePickerComponent setDate={(date) => setDate(date)} date={date} />
        </View>
        <Text style={styles.textlabelField}>Título</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Digite um título..."
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.textlabelField}>Descrição</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Digite uma descrição..."
          multiline={true}
          // numberOfLines={4} Fica com mais linhas mas o Imput quebra para baixo.
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <View style={styles.containerMicButton}>
        <TouchableOpacity onPress={isRecording ? stopRecording : startRecording} style={styles.micButton}>
          <Image style={styles.micImage} source={require("../../../assets/mic.png")}/>
        </TouchableOpacity>
        { isRecording && <Text style={styles.textRecording}>Ouvindo...</Text> }
      </View>

      <View style={styles.viewButtons}>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSave} onPress={createNote}>
          <Text style={styles.buttonTextSave}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
}

export default CrudAnnotation;