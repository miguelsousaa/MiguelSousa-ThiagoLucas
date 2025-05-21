import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Titulo from './components/Titulo';
import Inputer from './components/Inputer';
import Botoes from './components/Botoes';
import Resultado from './components/Resultado';
import Contador from './components/Contador';

export default function App() {
  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Titulo />
        <Inputer text={text} setText={setText} />
        <Botoes text={text} setResult={setResult} />
        <Resultado result={result} />
        <Contador text={result} />
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F4F4F',
    padding: 24,
    justifyContent: 'center',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
});

