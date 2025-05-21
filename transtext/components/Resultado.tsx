import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
  result: string;
}

export default function ResultDisplay({ result }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Resultado:</Text>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  result: {
    fontSize: 16,
  },
});
