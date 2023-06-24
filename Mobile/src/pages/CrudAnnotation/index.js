import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, } from "react-native";
import Voice from "@react-native-voice/voice";
import styles from "./styles";

const NavigateComponent = () => {
  return <>
    <View style={styles.componenteNavegacao}>

      <TouchableOpacity>
        <Image
          source={require('../../../assets/left.png')}
          style={styles.arrow}
        />
      </TouchableOpacity>
      <Text style={styles.textData}>19 fevereiro 2023</Text>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/right.png')}
          style={styles.arrow}
        />
      </TouchableOpacity>
    </View>
  </>
}

const CrudAnnotation = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [result, setResult] = useState('');
  const [audioError, setAudioError] = useState('');
  const [isRecording, setIsRecording] = useState(false);

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

  return <>
    <View style={styles.safe}>
      <View style={styles.ViewText}>
        <NavigateComponent />
        <Text style={styles.textlabelField}>Título</Text>
        <TextInput
          style={styles.inputTitle}
          placeholder="Digite um título..."
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.textlabelField}>Descrição</Text>
        <TextInput
          style={styles.inputDescricao}
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
        <TouchableOpacity style={styles.buttonSave} onPress={() => { }}>
          <Text style={styles.buttonTextSave}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
}

export default CrudAnnotation;