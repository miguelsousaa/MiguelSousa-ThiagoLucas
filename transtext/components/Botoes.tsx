import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  text: string;
  setResult: (value: string) => void;
}

export default function ButtonPanel({ text, setResult }: Props) {
  const toUpper = () => setResult(text.toUpperCase());
  const toLower = () => setResult(text.toLowerCase());
  const reverse = () => setResult(text.split('').reverse().join(''));
  const clear = () => setResult('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={toUpper}>
        <Text style={styles.botaoTexto}>Maiúsculo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={toLower}>
        <Text style={styles.botaoTexto}>Minúsculo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={reverse}>
        <Text style={styles.botaoTexto}>Inverter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoLimpar]} onPress={clear}>
        <Text style={styles.botaoTexto}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#1E90FF',
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  botaoLimpar: {
    backgroundColor: '#FF4500', // vermelho estilo "Limpar"
  },
  botaoTexto: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
