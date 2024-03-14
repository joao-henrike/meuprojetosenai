import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleLogin = () => {
    setButtonPressed(true);
   
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/8a/6e/ac/8a6eace757a4444e8a358b86301646e6.jpg', 
      }}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Texto de boas-vindas */}
        <Text style={styles.text}>Bem Vindo!</Text>

        {/* Input de email */}
        <TextInput
          style={[styles.input, buttonPressed && !email && styles.inputError]}
          placeholder='Email'
          value={email}
          onChangeText={text => setEmail(text)}
        />

        {/* Input de senha */}
        <TextInput
          style={[styles.input, buttonPressed && !password && styles.inputError]}
          placeholder='Senha'
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        {/* Botão */}
        <TouchableOpacity
          style={[styles.btn, buttonPressed && (!email || !password) && styles.btnError]}
          onPress={handleLogin}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  },
  inputError: {
    borderColor: 'red',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#007bff',
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  btnError: {
    backgroundColor: 'red',
  },
});
