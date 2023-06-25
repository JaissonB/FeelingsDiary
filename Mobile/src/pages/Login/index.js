import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import { setStorageData, getStorageData } from "../../services/storage";

import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import theme from '../../theme';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const writeTokenToStorage = async (token, name, flag) => {
    await setStorageData("TOKEN", token);
    await setStorageData("USER_NAME", name);
    await setStorageData("IS_PROFESSIONAL", flag);
  };

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password,
    }
    await api.post("authenticate", body).then(response => {
      response.data.isProfessional ?
      navigation.navigate("RoutesDrawerProfessional") :
      navigation.navigate("RoutesDrawer") 
      api.defaults.headers.common["authorization"] = `Bearer ${response.data.token}`;
      writeTokenToStorage(response.data.token, response.data.completeName, response.data.isProfessional.toString());
    }).catch(error => {
      console.error("Login Error", error.response);
    });

    return;
  };

  const handleRegister = () => {
    // Lógica de registro aqui
    navigation.navigate("Configuration"); 
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../Mobile/assets/logo.png')}
        style={styles.logo}
      />
      <TextInput
        id="email"
        placeholderTextColor={theme.color_black}
        style={styles.input}
        placeholder="E-mail"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        id="senha"
        placeholderTextColor={theme.color_black}
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.registerText} onPress={handleRegister}>
        Não tem uma conta? Registrar-se
      </Text>
    </View>
  );
};

export default Login;
