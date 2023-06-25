import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './style';
import theme from '../../theme';

const CheckBox = ({ option, stateCheck, toggle }) => {
  return <>
    <View>
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.touchableOption} onPress={() => { toggle(!stateCheck) }}>
          {stateCheck ?
            <Image
              source={require('../../../../Mobile/assets/checked.png')}
              style={styles.checkImage}
            /> :
            <Image
              source={require('../../../../Mobile/assets/check.png')}
              style={styles.checkImage}
            />
          }
        </TouchableOpacity>
        <Text style={styles.opText}>{option}</Text>
      </View>
    </View>
  </>
}

const Configuration = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProfessional, setIsProfessional] = useState(false);
  const [professionalTag, setProfessionalTag] = useState('');

  const [firstAccess, setFirstAccess] = useState(true);

  return <>
    <View style={styles.safe}>
      <Image
        source={require('../../../../Mobile/assets/logo.png')}
        style={styles.logo}
      />
      <TextInput
        id="fullName"
        placeholderTextColor={theme.color_black}
        style={styles.input}
        placeholder="Nome completo"
        onChangeText={text => setFullName(text)}
        value={fullName}
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
      {firstAccess ?
        <View style={styles.professional}>
          <View style={styles.check}>
            <CheckBox option={'Sou um Profissional'} stateCheck={isProfessional} toggle={setIsProfessional} />
          </View>
          <TextInput
            id="professionalTag"
            placeholderTextColor={theme.color_black}
            style={styles.inputTag}
            placeholder="Tag do Profissional"
            onChangeText={text => setProfessionalTag(text)}
            value={professionalTag}
          />
        </View> :
        <View style={styles.professional}>
          <TextInput
            id="professionalTag"
            placeholderTextColor={theme.color_black}
            style={styles.inputTag}
            placeholder="Tag do Profissional"
            onChangeText={text => setProfessionalTag(text)}
            value={professionalTag}
            editable={!isProfessional}
          />
        </View>
      }
      <TouchableOpacity style={styles.buttonSave} onPress={() => { }}>
        <Text style={styles.buttonTextSave}>{firstAccess ? 'Registrar' : 'Salvar'}</Text>
      </TouchableOpacity>
    </View>
  </>
};

export default Configuration;
