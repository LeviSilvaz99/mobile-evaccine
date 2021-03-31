import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Text>Cadastro eVaccinasda</Text>
      <TextInput placeholder="Nome"></TextInput>
      <TextInput placeholder="CPF"></TextInput>
      <TextInput placeholder="Telefone"></TextInput>
      <TextInput placeholder="e-mail"></TextInput>
      <TextInput placeholder="Idade"></TextInput>
      <TextInput placeholder="Data de Nascimento"></TextInput>
      <Button title="CADASTRAR."></Button>
      <StatusBar style="auto" />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {

  }
});
