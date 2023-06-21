import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, } from "react-native";
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
  const [titulo, setTitulo] = useState('');
  const [descricao, setdescricao] = useState('');

  return <>
    <View style={styles.safe}>
      <View style={styles.ViewText}>
        <NavigateComponent />
        <Text style={styles.textlabelField}>Título</Text>
        <TextInput
          style={styles.inputTitle}
          placeholder="Digite um título..."
          value={titulo}
          onChangeText={setTitulo}
        />

        <Text style={styles.textlabelField}>Descrição</Text>
        <TextInput
          style={styles.inputDescricao}
          placeholder="Digite uma descrição..."
          multiline={true}
          // numberOfLines={4} Fica com mais linhas mas o Imput quebra para baixo.
          value={descricao}
          onChangeText={setdescricao}
        />
      </View>

      <View style={styles.viewButtons}>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
}

export default CrudAnnotation;