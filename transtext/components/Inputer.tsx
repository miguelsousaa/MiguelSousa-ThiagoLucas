import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  text: string;
  setText: (value: string) => void;
}

export default function TextInputArea({ text, setText }: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Digite seu texto aqui..."
      multiline
      value={text}
      onChangeText={setText}
    />
  );
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: '#aaa',
      borderRadius: 10,
      paddingHorizontal: 16,
      paddingVertical: 12,
      fontSize: 16,
      marginBottom: 20,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
      width: '100%',
      textAlignVertical: 'top',
      minHeight: 100,
    },
  });
  