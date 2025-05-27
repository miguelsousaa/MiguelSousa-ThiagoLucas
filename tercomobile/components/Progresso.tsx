import { View, Text, StyleSheet } from 'react-native';

export default function Progresso({ texto }: { texto: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  texto: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});
