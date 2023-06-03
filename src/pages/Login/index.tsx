import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleRegister = () => {
    // Lógica de registro aqui
    console.log('Registrando...');
  };

  return (
    <View style={styles.container}>
      <TextInput
        id="email"
        placeholderTextColor="white"
        style={styles.input}
        placeholder="E-mail"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        id="senha"
        placeholderTextColor="white"
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
