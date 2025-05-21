import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
  text: string;
}

export default function StatsDisplay({ text }: Props) {
  const  contarLetras = text.length;
  const  contarPalavras = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <View style={styles.container}>
      <Text>Letras: { contarLetras}</Text>
      <Text>Palavras: { contarPalavras}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#3CB371',
      borderRadius: 8,
      width: '100%',
    },
    text: {
      fontSize: 18,
      fontWeight: '600',
      color: '#00000',
      textAlign: 'center',
      marginVertical: 4,
    },
  });
  